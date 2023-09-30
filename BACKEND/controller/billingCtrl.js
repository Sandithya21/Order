const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const User = require("../models/userModel");
const Order = require("../models/orderModel");

const createCheckoutSession = async (req, res) => {
    try {
        const {userId, cart} = req.body;

        const user = await User.findById(userId).populate("cart.productId");
        const cartItems = user.cart;

        if (cartItems.length === 0) {
            throw new Error("No items in the cart");
        }

        const lineItems = cartItems.map((item) => {
            const product = item.productId;
            return {
                price_data: {
                    currency: "usd", product_data: {
                        name: product.title,
                    }, unit_amount: product.price * 100,
                }, quantity: item.quantity,
            };
        });

        let totalPrice = 0;
        for (const cartItem of cartItems) {
            const product = cartItem.productId;
            const itemPrice = product.price * cartItem.quantity;
            totalPrice += itemPrice;
        }

        const order = new Order({
            user: userId, orderItems: cartItems, totalPrice: totalPrice,
        });
        await order.save();

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: lineItems,
            success_url: `${process.env.CLIENT_URL}/success.html`,
            cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
        });

        res.json({url: session.url});
    } catch (error) {
        console.error("Error in createCheckoutSession:", error);
        res.status(500).json({error: error.message});
    }
};


module.exports = {
    createCheckoutSession,
};
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

const morgan = require("morgan");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const PORT = process.env.PORT || 8040;

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB Connection Success!");
});

const authRoute = require("./routes/authRoute");
app.use("/api/user", authRoute);

const enqRouter = require("./routes/enqRoute");
app.use("/api/enquiry", enqRouter);

const productRouter = require("./routes/productRoute");
app.use("/api/product", productRouter);

const couponRouter = require("./routes/couponRoute");
app.use("/api/coupon", couponRouter);


app.use(bodyParser.urlencoded({extended: false}));
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`);
});















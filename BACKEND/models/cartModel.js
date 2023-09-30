const mongoose = require("mongoose"); 

var cartSchema = new mongoose.Schema(
  {
    userId : {
      type : String,
      ref : "User"
    },
    productId : {
      type : String,
      ref : "Product"
    },
    quantity : {
      type : Number,
      required : true
    },
    price : {
      type : Number,
      required : true
    },
    color : {
      type : String,
      //type : mongoose.Schema.Types.ObjectId,
      ref : "Color"
    },
  }, 
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Cart", cartSchema);
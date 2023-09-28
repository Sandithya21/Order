import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../features/user/userSlice";
import contactReducer from "../features/contact/contactSlice";
import productReducer from "../features/products/productSlice";

export const store = configureStore ({
    reducer:{
        auth : authReducer,
        contact : contactReducer,
        product : productReducer,
    },
});
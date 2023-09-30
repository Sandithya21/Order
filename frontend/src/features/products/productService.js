import axios from 'axios';
import { base_url } from "../../utils/axiosConfig";
//import {config} from "../../utils/axiosconfig";

const getProducts = async () =>{
    const response = await axios.get(`${base_url}product/`);
    return response.data;
}

const getSingleProduct = async (id) =>{
    const response = await axios.get(`http://localhost:8040/api/product/${id}`);
    return response.data;
}

const createProduct = async (product) =>{
    const response = await axios.post("http://localhost:8040/product/", product);
    return response.data;
}

const addToWishlist = async (ProductID) =>{
    const response = await axios.put("http://localhost:8040/product/wishlist", {ProductID});
    return response.data;
}

const productService = {
    getProducts,
    createProduct,
    addToWishlist,
    getSingleProduct,
}

export default productService;
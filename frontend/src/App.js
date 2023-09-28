import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OurStore from "./pages/OurStore";
import Login from "./pages/Login";
//import { PrivateRoutes } from "./routing/PrivateRoutes";
import { OpenRoutes } from "./routing/OpenRoutes";
import Order from "./pages/Order";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout />}>
          <Route index element = {<Home />}/>
          <Route path = "about" element = {<About />}/>
          <Route path = "contact" element = {<Contact />}/>
          <Route path = "cart" element = {<Cart />}/>
          <Route path = "my-orders" element = {<Order />}/>
          <Route path="login" element={<OpenRoutes><Login/></OpenRoutes>}/>
          <Route path = "Checkout" element = {<Checkout />}/>
          <Route path="store" element= {<OurStore/>}/>
          <Route path="store/product/:id" element={<SingleProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;

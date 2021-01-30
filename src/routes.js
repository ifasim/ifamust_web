import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Login from "./containers/Login";
import Signup from "./containers/Signup";
import HomepageLayout from "./containers/Home";
import ProductList from "./containers/ProductList";
import ProductDetail from "./containers/ProductDetail";
import OrderSummary from "./containers/OrderSummary";
import Checkout from "./containers/Checkout";
import Profile from "./containers/Profile.js"; 
import AboutUs from "./containers/AboutUs.js";
import Chat from "./containers/ChatApp.js";
import Shop from "./containers/Shop";



import Home from "./Home/index.js";
// import Products from "./containers/ProductList/index.js";
// import Profile from "./containers/Profile/index.js";


const BaseRouter = () => (
  <Hoc>
    <Route exact path="/products" component={ProductList} />
    <Route path="/products/:productID" component={ProductDetail} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/order-summary" component={OrderSummary} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/profile" component={Profile} />
    <Route path="/aboutus" component={AboutUs} />
    <Route path="/chat" component={Chat} />
    <Route path="/shop" component={Shop} />
  

    {/* <Route path="/products" component={Products} />
    <Route path="/profile" component={Profile} /> */}


    <Route exact path="/" component={Home} />
  </Hoc>
);

export default BaseRouter;

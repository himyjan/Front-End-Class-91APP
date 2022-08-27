import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import GlobalStyle from "./styledComponents/index.style";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Carousel from "./Carousel";
import Product from "./Product";
import Checkout from "./Checkout";
import Thankyou from "./Thankyou";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
    <GlobalStyle />
  </React.StrictMode>
);

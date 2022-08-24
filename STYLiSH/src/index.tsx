import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import GlobalStyle from "./StyledComponents/index.style";
import Header from "./StyledComponents/Header.style";
import Footer from "./Footer";
import Home from "./Home";
import Carousel from "./Carousel";
import Product from "./Product";
import Checkout from "./Checkout";
import Thankyou from "./Thankyou";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Header className="header" />
    <Carousel />
    <Home />
    <Footer />
    <GlobalStyle />
  </React.StrictMode>
);

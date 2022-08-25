import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import GlobalStyle from "./StyledComponents/index.style";
import Header from "./StyledComponents/Header.style";
import Footer from "./StyledComponents/Footer.style";
import Home from "./StyledComponents/Home.style";
import Carousel from "./StyledComponents/Carousel.style";
import Product from "./StyledComponents/Product.style";
import Checkout from "./StyledComponents/Checkout.style";
import Thankyou from "./StyledComponents/Thankyou.style";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Header className="header" />
    <Carousel className="Carousel" />
    <Home className="Home" />
    <Footer className="Footer" />
    <GlobalStyle />
  </React.StrictMode>
);

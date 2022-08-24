import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import styled from "styled-components";
import GlobalStyle from "./StyledComponents/index.style";
import Home from "./Home";
import Product from "./Product";
import Checkout from "./Checkout";
import Thankyou from "./Thankyou";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Home />
    <GlobalStyle />
  </React.StrictMode>
);

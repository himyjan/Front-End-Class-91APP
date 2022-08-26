import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyle from "./styledComponents/index.style";
import Header from "./styledComponents/Header.style";
import Footer from "./styledComponents/Footer.style";
import Home from "./styledComponents/Home.style";
import Carousel from "./styledComponents/Carousel.style";
import Product from "./styledComponents/Product.style";
import Checkout from "./styledComponents/Checkout.style";
import Thankyou from "./styledComponents/Thankyou.style";

// Create a client
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Header className="header" />
      <Carousel className="Carousel" />
      <Home className="Home" />
      <Footer className="Footer" />
      <GlobalStyle />
    </React.StrictMode>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  Link,
  MakeGenerics,
  MatchRoute,
  Outlet,
  ReactLocation,
  Router,
  useLoadRoute,
  useMatch,
} from "@tanstack/react-location";
import { ReactLocationDevtools } from "@tanstack/react-location-devtools";

import GlobalStyle from "./styledComponents/index.style";
import Header from "./styledComponents/Header.style";
import Footer from "./styledComponents/Footer.style";
import Carousel from "./styledComponents/Carousel.style";
import Home from "./styledComponents/Home.style";
import Product from "./styledComponents/Product.style";
import Checkout from "./styledComponents/Checkout.style";

export const queryClient = new QueryClient();
export const location = new ReactLocation();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <QueryClientProvider client={queryClient} contextSharing={true}>
    <Router
      location={location}
      routes={[
        {
          path: "/",
          element: (
            <>
              <Carousel className="Carousel" />
              <Home className="Home" />
            </>
          ),
        },
        {
          path: "product",
          element: (
            <>
              <Product className="Product" />
            </>
          ),
        },
        {
          path: "checkout",
          element: (
            <>
              <Checkout className="Checkout" />
            </>
          ),
        },
      ]}
    >
      <React.StrictMode>
        <Header className="header" />
        <Outlet />
        <Footer className="Footer" />
        <GlobalStyle />
      </React.StrictMode>
      <ReactLocationDevtools position="bottom-right" />
    </Router>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

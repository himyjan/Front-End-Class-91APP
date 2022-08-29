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
import { findAllLoader } from "./lib/fetchAPI";

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
          id: "all",
          path: "/",
          loader: () =>
            queryClient.getQueryData(["posts"]) ??
            queryClient
              .fetchQuery(["posts"], findAllLoader)
              .then((res) => res.data),
          element: (
            <>
              <Carousel className="Carousel" />
              <Home className="Home" />
            </>
          ),
        },
        {
          id: "women",
          path: "/",
          search: (search) => {
            return search.category === "women";
          },
        },
        {
          id: "men",
          path: "/",
          search: (search) => {
            return search.category === "men";
          },
        },
        {
          id: "accessories",
          path: "/",
          search: (search) => {
            return search.category === "accessories";
          },
        },
        {
          id: "search",
          path: "/",
          search: (search) => {
            return (
              typeof search.keyword === "string" ||
              search.keyword instanceof String
            );
          },
        },
        {
          id: "product",
          path: "product",
          children: [
            {
              path: ":product_id",
              element: (
                <>
                  <Product className="Product" />
                </>
              ),
            },
          ],
        },
        {
          id: "checkout",
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
      <ReactLocationDevtools initialIsOpen={false} position="bottom-right" />
    </Router>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

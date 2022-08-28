import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import GlobalStyle from "./styledComponents/index.style";
import Header from "./styledComponents/Header.style";
import Footer from "./styledComponents/Footer.style";
import Home from "./styledComponents/Home.style";
import Carousel from "./styledComponents/Carousel.style";

export const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <QueryClientProvider client={queryClient} contextSharing={true}>
    <React.StrictMode>
      <Header className="header" />
      <Carousel className="Carousel" />
      <Home className="Home" />
      <Footer className="Footer" />
      <GlobalStyle />
    </React.StrictMode>
  </QueryClientProvider>
);

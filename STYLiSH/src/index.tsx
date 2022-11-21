import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  createReactRouter,
  createRouteConfig,
  Outlet,
  Router,
  RouterProvider,
} from '@tanstack/react-router';

import GlobalStyle from './styledComponents/index.style';
import Header from './styledComponents/Header.style';
import Footer from './styledComponents/Footer.style';
import Carousel from './styledComponents/Carousel.style';
import Home from './styledComponents/Home.style';
import Product from './styledComponents/Product.style';
import Checkout from './styledComponents/Checkout.style';
import {
  getCategoryAllDataLoader,
  getCategoryWomenDataLoader,
  getCategoryMenDataLoader,
  getCategoryAccessoriesDataLoader,
  getProductDataLoader,
  ApiDataJson,
} from './lib/fetchAPI';

export const queryClient = new QueryClient();
export const rootRoute = createRouteConfig();

export const getQueryClientFetchData = (key: string[]) => {
  return queryClient.getQueryData(key) as ApiDataJson;
};

const indexRoute = rootRoute.createRoute({
  id: 'all',
  path: '/',
  component: Home,
  errorComponent: () => 'Oh crap',
  loader: async () =>
    queryClient.getQueryData(['AllData']) ??
    queryClient
      .fetchQuery(['AllData'], getCategoryAllDataLoader)
      .then((res) => res.data),
});

const indexWomenRoute = indexRoute.createRoute({
  id: 'women',
  path: '/',
  component: Home,
  errorComponent: () => 'Oh crap',
  loader: async () =>
    queryClient.getQueryData(['WomenData']) ??
    queryClient
      .fetchQuery(['WomenData'], getCategoryWomenDataLoader)
      .then((res) => res.data),
});

const indexMenRoute = indexRoute.createRoute({
  id: 'men',
  path: '/',
  component: Home,
  errorComponent: () => 'Oh crap',
  loader: async () =>
    queryClient.getQueryData(['MenData']) ??
    queryClient
      .fetchQuery(['MenData'], getCategoryMenDataLoader)
      .then((res) => res.data),
});

const indexAccessoriesRoute = indexRoute.createRoute({
  id: 'accessories',
  path: '/',
  component: Home,
  errorComponent: () => 'Oh crap',
  loader: async () =>
    queryClient.getQueryData(['AccessoriesData']) ??
    queryClient
      .fetchQuery(['AccessoriesData'], getCategoryAccessoriesDataLoader)
      .then((res) => res.data),
});

// const indexSearchRoute = indexRoute.createRoute({
//   id: 'search',
//   path: '/',
//   component: Home,
//   errorComponent: () => 'Oh crap',
//   search: (search) => {
//     return (
//       typeof search.keyword === 'string' || search.keyword instanceof String
//     );
//   },
// });

const productPage = () => {
  return (
    <>
      <div>productID not found!</div>
    </>
  );
};

export const productRoute = rootRoute.createRoute({
  path: '/product',
  component: productPage,
});

export const productIDRoute = productRoute.createRoute({
  id: 'product',
  path: '/:product_id',
  component: Product,
  errorComponent: () => 'Oh crap',
  loader: async ({ params: { product_id } }) =>
    queryClient.getQueryData(['product', product_id]) ??
    queryClient.fetchQuery(['product', product_id], () =>
      getProductDataLoader(product_id)
    ),
});

export const checkoutRoute = rootRoute.createRoute({
  path: '/checkout',
  component: Checkout,
});

const routeConfig = createRouteConfig().addChildren([
  // indexRoute,
  indexRoute.addChildren([
    indexWomenRoute,
    indexMenRoute,
    indexAccessoriesRoute,
  ]),
  productRoute.addChildren([productIDRoute]),
]);

// Set up a ReactRouter instance
const router = createReactRouter({
  routeConfig,
  // defaultPreload: 'intent',
});

declare module '@tanstack/react-router' {
  interface RegisterRouter {
    router: typeof router;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <QueryClientProvider client={queryClient} contextSharing={true}>
    <RouterProvider router={router}>
      <React.StrictMode>
        <Header className='header' />
        <Outlet />
        <Footer className='Footer' />
        <GlobalStyle />
      </React.StrictMode>
    </RouterProvider>
  </QueryClientProvider>
);

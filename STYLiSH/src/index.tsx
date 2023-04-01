import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  LoaderClient,
  LoaderClientProvider,
} from '@tanstack/react-loaders'
import {
  Outlet,
  RouterProvider,
  Router,
  Route,
  RootRoute,
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
  getSearchDataLoader,
  getCategoryAllDataRouterLoader,
  getCategoryWomenDataRouterLoader,
  getCategoryMenDataRouterLoader,
  getCategoryAccessoriesDataRouterLoader,
  getProductDataRouterLoader,
  getSearchDataRouterLoader,
  ApiDataJson,
} from './lib/fetchAPI';
import { z } from 'zod';

export const queryClient = new QueryClient();
export const loaderClient = new LoaderClient({
  getLoaders: () => ({
  }),
});

declare module '@tanstack/react-loaders' {
  interface Register {
    loaderClient: typeof loaderClient
  }
}

type RouterContext = {
  loaderClient: typeof loaderClient
}

export const rootRoute = new RootRoute({
  component: () => {
    return (
      <>
        <Header className='Header' />
        <Outlet />
        <Footer className='Footer' />
        <GlobalStyle />
      </>
    )
  }
});

export const getQueryClientFetchData = (key: string[]) => {
  return queryClient.getQueryData(key) as ApiDataJson;
};

const productSearchSchema = z.object({
  category: z.enum(['', 'women', 'men', 'accessories']).catch(''),
  keyword: z.string().catch(''),
})

const queryClientKey = {
  '': 'AllData',
  'women': 'WomenData',
  'men': 'MenData',
  'accessories': 'AccessoriesData',
}

const getCategoryDataLoader = {
  '': getCategoryAllDataLoader,
  'women': getCategoryWomenDataLoader,
  'men': getCategoryMenDataLoader,
  'accessories': getCategoryAccessoriesDataLoader,
}

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  id: 'home',
  path: '/',
  caseSensitive: true,
  validateSearch: productSearchSchema,
  component: () => {
    return (
      <>
        <Carousel className='Carousel' />
        <Home className='Home' />
      </>
    );
  },
  errorComponent: () => 'Oh crap',
  onLoad:
    async ({ search }) =>
      queryClient.getQueryData([queryClientKey[search.category]]) ??
      queryClient
        .fetchQuery([queryClientKey[search.category]], getCategoryDataLoader[search.category])
        .then((res) => res.data),
});

// export const indexSearchRoute = new Route({
//   getParentRoute: () => rootRoute,
//   id: 'search',
//   path: '/',
//   component: () => {
//     return (
//       <>
//         <Carousel className='Carousel' />
//         <Home className='Home' />
//       </>
//     );
//   },
//   errorComponent: () => 'Oh crap',
//   search: (search) => {
//     return (
//       typeof search.keyword === 'string' || search.keyword instanceof String
//     );
//   },
// });

export const productIDRoute = new Route({
  getParentRoute: () => rootRoute,
  id: 'product',
  path: 'product/$product_id',
  parseParams: (params) => ({ product_id: params.product_id }),
  component: () => {
    return (
      <Product className='Product' />
    );
  },
  errorComponent: () => 'Oh crap',
  onLoad: async ({ params: { product_id } }) =>
    queryClient.getQueryData(['product', product_id]) ??
    queryClient.fetchQuery(['product', product_id], () =>
      getProductDataLoader(product_id)
    ),
});

export const checkoutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'checkout',
  component: Checkout,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  productIDRoute,
  checkoutRoute,
]);

// Set up a ReactRouter instance
const router = new Router({
  routeTree,
  defaultPreload: 'intent',
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const ReactQueryDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
      // Lazy load in development
      import('@tanstack/react-query-devtools').then((res) => ({
        default: res.ReactQueryDevtools,
        // For Embedded Mode
        // default: res.ReactQueryDevtoolsPanel
      })),
    );

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
      // Lazy load in development
      import('@tanstack/react-router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
        // For Embedded Mode
        // default: res.TanStackRouterDevtoolsPanel
      })),
    );

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <LoaderClientProvider loaderClient={loaderClient}>
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV === 'production'
          ? null
          : <ReactQueryDevtools initialIsOpen={false} />}
        <RouterProvider router={router} />
        {process.env.NODE_ENV === 'production'
          ? null
          : <TanStackRouterDevtools router={router} position='bottom-right' />}
      </QueryClientProvider>
    </LoaderClientProvider>
  </StrictMode>
);

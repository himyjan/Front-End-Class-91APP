import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Header from '../styledComponents/Header.style';
import Footer from '../styledComponents/Footer.style';
import GlobalStyle from '../styledComponents/index.style'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header className='Header' />
      <Outlet />
      <Footer className='Footer' />
      <GlobalStyle />
      {process.env.NODE_ENV === 'production'
        ? null
        : <TanStackRouterDevtools buttonPosition-='bottom-left' position='bottom-left' />}
      {process.env.NODE_ENV === 'production'
        ? null
        : <ReactQueryDevtools buttonPosition='bottom-right' position='right' />}
    </>
  ),
})
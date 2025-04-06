import { createFileRoute } from '@tanstack/react-router'
import Carousel from '../styledComponents/Carousel.style';
import Products from '../styledComponents/Products.style';
import logo from '../logo.svg'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <Carousel className='Carousel' />
      <Products className='Products' />
    </>
  )
}

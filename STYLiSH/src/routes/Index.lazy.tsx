import { createLazyFileRoute } from '@tanstack/react-router';
import Carousel from '../Carousel';
import Products from '../Products';

function Index() {
  return (
    <>
      <Carousel className='Carousel' />
      <Products className='Products' />
    </>
  );
}

export const Route = createLazyFileRoute('/Index')({
  component: Index,
})
import { createFileRoute } from '@tanstack/react-router';
import Carousel from '../styledComponents/Carousel.style';
import Products from '../styledComponents/Products.style';

function Index() {
  return (
    <>
      <Carousel className='Carousel' />
      <Products className='Products' />
    </>
  );
}

type ProductSearchCategoryOptions = 'all' | 'men' | 'women' | 'acccessories'

type ProductSearch = {
  page: number
  category: ProductSearchCategoryOptions
  keyword: string
}

export const Route = createFileRoute('/')({
  loader: async () => {
  },
  validateSearch: (search: Record<string, unknown>): ProductSearch => {
    return {
      page: Number(search?.page ?? 1),
      category: (search.category as ProductSearchCategoryOptions),
      keyword: (search.keyword as string) || '',
    }
  },
  component: Index,
})
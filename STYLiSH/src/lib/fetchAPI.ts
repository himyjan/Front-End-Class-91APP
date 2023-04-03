import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '@tanstack/react-loaders';
import { ApiDataJson, ApiData } from '../types/apiDataType';

// https://www.bezkoder.com/react-query-axios-typescript/

export const BASE_URL = 'https://api.appworks-school.tw/api/1.0';

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

// export type Color = {
//   code: string;
//   name: string;
// }

// export type ApiData = {
//   id: number;
//   product_id: number;
//   picture: string;
//   story: string;
//   category: string;
//   title: string;
//   price: number;
//   main_image: string;
//   colors: Color[];
//   note: string;
//   texture: string;
//   description: string;
//   wash: string;
//   place: string;
//   images: string[];
//   sizes: string[];
// }

// export interface ApiDataJson {
//   data: ApiData[];
//   next_paging: number;
// }

// // fetch version
// export const findSliderFetch = async (): Promise<{
//   data: {
//     data: ApiData[]
//   }
// }> =>
//   fetch(`${BASE_URL}/marketing/campaigns`)
//     .then((res) => res.json())
//     .then((data) => data.data);

// export const getSliderDataFetch = () => {
//   const { data: SliderData } = useQuery<{
//     data: {
//       data: ApiData[]
//     }
//   }>(
//     ["SliderData"],
//     findSliderFetch,
//     {
//       initialData: { data: { data: [] } },
//     }
//   );
//   return SliderData;
// };

// axios version

const api = {
  async getProducts(category: string, paging: number) {
    return await axiosClient.get(
      `/products/${category}?paging=${paging}`,
    ) as { data: ApiDataJson };
  },
  async searchProducts(keyword: string, paging: number) {
    return await axiosClient.get(
      `/products/search?keyword=${keyword}&paging=${paging}`,
    ) as { data: ApiDataJson };
  },
  getSliderData() {
    const { data: { data: SliderData } } = useQuery<{
      data: {
        data: ApiData[]
      }
    }>(
      ['SliderData'],
      async () => (await axiosClient.get('/marketing/campaigns')),
      {
        initialData: { data: { data: [] } },
      }
    );
    return SliderData;
  },
  async getSliderDataLoader() {
    return await axiosClient.get('/marketing/campaigns') as { data: { data: ApiData[] } };
  },
  async getSliderDataRouterLoader() {
    return new Loader({
      key: 'Slider',
      loader: async () => {
        return await axiosClient.get('/marketing/campaigns') as { data: { data: ApiData[] } };
      }
    })
  },
  findAll() {
    const { data: HomeData } = useQuery<{
      data: ApiDataJson
    }>(
      ['HomeData'],
      async () => (await axiosClient.get('/products/all') as { data: ApiDataJson }),
      {
        initialData: {
          data: {
            data: [],
            next_paging: -1,
          } as ApiDataJson
        },
      }
    );
    return HomeData;
  },
  async getCategoryAllDataLoader() {
    return await axiosClient.get('/products/all') as { data: ApiDataJson };
  },
  async getCategoryAllDataRouterLoader() {
    return new Loader({
      key: 'All',
      loader: async () => {
        return await axiosClient.get('/products/all') as { data: ApiDataJson };
      }
    })
  },
  findWomen() {
    const { data: HomeData } = useQuery<{
      data: ApiDataJson
    }>(
      ['homeData'],
      async () => (await axiosClient.get('/products/women') as { data: ApiDataJson }),
      {
        initialData: {
          data: {
            data: [],
            next_paging: -1,
          } as ApiDataJson
        },
      }
    );
    return HomeData;
  },
  async getCategoryWomenDataLoader() {
    return await axiosClient.get('/products/women') as { data: ApiDataJson };
  },
  getCategoryWomenDataRouterLoader: new Loader({
    key: 'Women', loader: async () => {
      return await axiosClient.get('/products/women') as { data: ApiDataJson };
    }
  }),
  findMen() {
    const { data: HomeData } = useQuery<{
      data: ApiDataJson
    }>(
      ['homeData'],
      async () => (await axiosClient.get('/products/men') as { data: ApiDataJson }),
      {
        initialData: {
          data: {
            data: [],
            next_paging: -1,
          } as ApiDataJson
        },
      }
    );
    return HomeData;
  },
  async getCategoryMenDataLoader() {
    return await axiosClient.get('/products/men') as { data: ApiDataJson };
  },
  getCategoryMenDataRouterLoader: new Loader({
    key: 'Men', loader: async () => {
      return await axiosClient.get('/products/men') as { data: ApiDataJson };
    }
  }),
  async findAccessories() {
    const { data: HomeData } = useQuery<{
      data: ApiDataJson
    }>(
      ['homeData'],
      async () => (await axiosClient.get('/products/accessories') as { data: ApiDataJson }),
      {
        initialData: {
          data: {
            data: [],
            next_paging: -1,
          } as ApiDataJson
        },
      }
    );
    return HomeData;
  },
  async getCategoryAccessoriesDataLoader() {
    return await axiosClient.get('/products/accessories') as { data: ApiDataJson };
  },
  getCategoryAccessoriesDataRouterLoader: new Loader({
    key: 'Accessories', loader: async () => {
      return await axiosClient.get('/products/accessories') as { data: ApiDataJson };
    }
  }),
  findSearch(searchKeyWord: string) {
    const { data: HomeData } = useQuery<{
      data: ApiDataJson
    }>(
      ['SearchData'],
      async () =>
        (await axiosClient.get(`/products/search?keyword=${searchKeyWord}`) as { data: ApiDataJson }),
      {
        initialData: {
          data: {
            data: [],
            next_paging: -1,
          } as ApiDataJson
        },
      }
    );
    return HomeData;
  },
  async getSearchDataLoader(searchKeyWord: string) {
    return await axiosClient.get(`/products/search?keyword=${searchKeyWord}`) as { data: ApiDataJson };
  },
  getSearchDataRouterLoader: new Loader({
    key: "Search", loader: async (searchKeyWord: string) => {
      return await axiosClient.get(`/products/search?keyword=${searchKeyWord}`) as { data: ApiDataJson };
    }
  }),
  async getProduct(id: string) {
    return await axiosClient.get(`/products/details?id=${id}`) as { data: { data: ApiData } };
  },
  async getProductDataLoader(product_id: string) {
    return await axiosClient.get(`/products/details?id=${product_id}`) as { data: { data: ApiData } };
  },
  getProductDataRouterLoader: new Loader({
    key: 'Product', loader: async (product_id: string) => {
      return await axiosClient.get(`/products/details?id=${product_id}`) as { data: { data: ApiData } };
    }
  })
}

export default api;

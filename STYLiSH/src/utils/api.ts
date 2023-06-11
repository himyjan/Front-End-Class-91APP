import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '@tanstack/react-loaders';
import type { CarouselDetails, MarketingCampaigns } from "../types/marketingType";
import type { ProductDetails, ProductDetailsData, ProductsSearch } from "../types/productType";
import type { profile } from "../types/profileType";

export const BASE_URL = 'https://api.appworks-school.tw/api/1.0';

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

// // fetch version
// export const findSliderFetch = async (): Promise<{
//   data: {
//     data: CarouselDetails[]
//   }
// }> =>
//   fetch(`${BASE_URL}/marketing/campaigns`)
//     .then((res) => res.json())
//     .then((data) => data.data);

// export const getSliderDataFetch = () => {
//   return useQuery<{
//     data: {
//       data: CarouselDetails[]
//     }
//   }>(
//     ["SliderData"],
//     findSliderFetch,
//     {
//       initialData: { data: { data: [] } },
//     }
//   );
// };

// axios version

type CheckoutData = {
  prime: string;
  order: {
    shipping: string;
    payment: string;
    subtotal: number;
    freight: number;
    total: number;
    recipient: {
      name: string;
      email: string;
      phone: string;
      address: string;
      time: string;
    };
    list: {
      id: number | string;
      name: string;
      price: string | number;
      color: {
        code: string;
        name: string;
      };
      size: string;
      qty: number | string;
    }[];
  };
}

type SignInData = {
  access_token: string;
  provider: string;
}

const api = {
  hostname: 'https://api.appworks-school.tw/api/1.0',
  // async getProducts(category: string, paging: number): Promise<ProductsSearch> {
  //   const response = await fetch(
  //     `${this.hostname}/products/${category}?paging=${paging}`
  //   );
  //   return await response.json();
  // },
  // async getCampaigns(): Promise<MarketingCampaigns> {
  //   const response = await fetch(`${this.hostname}/marketing/campaigns`);
  //   return await response.json();
  // },
  // async searchProducts(keyword: string, paging: number): Promise<ProductsSearch> {
  //   const response = await fetch(
  //     `${this.hostname}/products/search?keyword=${keyword}&paging=${paging}`
  //   );
  //   return await response.json();
  // },
  // async getProduct(id: string): Promise<ProductDetails> {
  //   const response = await fetch(`${this.hostname}/products/details?id=${id}`);
  //   return await response.json();
  // },
  // async checkout(data: CheckoutData, jwtToken: string): Promise<any> {
  //   const response = await fetch(`${this.hostname}/order/checkout`, {
  //     body: JSON.stringify(data),
  //     headers: new Headers({
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${jwtToken}`,
  //     }),
  //     method: 'POST',
  //   });
  //   return await response.json();
  // },
  async signin(data: SignInData): Promise<any> {
    const response = await fetch(`${this.hostname}/user/signin`, {
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      method: 'POST',
    });
    return await response.json();
  },
  async getProfile(jwtToken: string): Promise<{ data: profile }> {
    const response = await fetch(`${this.hostname}/user/profile`, {
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      }),
    });
    return await response.json();
  },
  // async getProducts(category: string, paging: number) {
  //   return await axiosClient.get(
  //     `/products/${category}?paging=${paging}`,
  //   ) as { data: ProductsSearch };
  // },
  // async searchProducts(keyword: string, paging: number) {
  //   return await axiosClient.get(
  //     `/products/search?keyword=${keyword}&paging=${paging}`,
  //   ) as { data: ProductsSearch };
  // },
  getSliderData() {
    return useQuery<{
      data: {
        data: CarouselDetails[]
      }
    }>({
      queryKey: ['SliderData'],
      queryFn: async () => (await axiosClient.get('/marketing/campaigns')),
    });
  },
  async getSliderDataLoader() {
    return await axiosClient.get('/marketing/campaigns') as { data: { data: CarouselDetails[] } };
  },
  getSliderDataRouterLoader: new Loader({
    fn: async () => {
      return await axiosClient.get('/marketing/campaigns') as { data: { data: CarouselDetails[] } };
    }
  }),
  getProducts() {
    return useQuery<{
      data: ProductDetailsData
    }>({
      queryKey: ['HomeData'],
      queryFn: async () => (await axiosClient.get('/products/all') as { data: ProductDetailsData }),
    });
  },
  async getProductsDataLoader() {
    return await axiosClient.get('/products/all') as { data: ProductDetailsData };
  },
  getProductsDataRouterLoader: new Loader({
    fn: async () => {
      return await axiosClient.get('/products/all') as { data: ProductDetailsData };
    }
  }),
  findSearch(searchKeyWord: string) {
    return useQuery<{
      data: ProductDetailsData
    }>({
      queryKey: ['SearchData'],
      queryFn: async () =>
        (await axiosClient.get(`/products/search?keyword=${searchKeyWord}`) as { data: ProductDetailsData })
    });
  },
  async getSearchDataLoader(searchKeyWord: string) {
    return await axiosClient.get(`/products/search?keyword=${searchKeyWord}`) as { data: ProductDetailsData };
  },
  getSearchDataRouterLoader: new Loader({
    fn: async (searchKeyWord: string) => {
      return await axiosClient.get(`/products/search?keyword=${searchKeyWord}`) as { data: ProductDetailsData };
    }
  }),
  async getProduct(id: string) {
    return await axiosClient.get(`/products/details?id=${id}`) as { data: { data: ProductDetailsData } };
  },
  async getProductDataLoader(product_id: string) {
    return await axiosClient.get(`/products/details?id=${product_id}`) as { data: { data: ProductDetailsData } };
  },
  getProductDataRouterLoader: new Loader({
    fn: async (product_id: string) => {
      return await axiosClient.get(`/products/details?id=${product_id}`) as { data: { data: ProductDetailsData } };
    }
  })
};

export default api;

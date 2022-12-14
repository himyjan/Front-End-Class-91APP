import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

// https://www.bezkoder.com/react-query-axios-typescript/

export const BASE_URL = 'https://api.appworks-school.tw/api/1.0';

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

interface Color {
  code: string;
  name: string;
}

export interface ApiData {
  id: number;
  product_id: number;
  picture: string;
  story: string;
  category: string;
  title: string;
  price: number;
  main_image: string;
  colors: Color[];
  note: string;
  texture: string;
  description: string;
  wash: string;
  place: string;
  images: string[];
  sizes: string[];
}

export interface ApiDataJson {
  data: ApiData;
  next_paging: number;
}

// // fetch version
// export const findSliderFetch = async (): Promise<ApiData[]> =>
//   fetch(`${BASE_URL}/marketing/campaigns`)
//     .then((res) => res.json())
//     .then((data) => data.data);

// export const getSliderDataFetch = () => {
//   const { data: SliderData } = useQuery<ApiData[]>(
//     ["SliderData"],
//     findSliderFetch,
//     {
//       initialData: [],
//     }
//   );
//   return SliderData;
// };

// axios version
export const getSliderData = () => {
  const { data: SliderData } = useQuery<ApiData[]>(
    ['SliderData'],
    async () => (await axiosClient.get('/marketing/campaigns')).data.data,
    {
      initialData: [],
    }
  );
  return SliderData;
};

export const getSliderDataLoader = async () => {
  await new Promise((r) => setTimeout(r, 500));
    return {
      data: await axiosClient.get('/marketing/campaigns'),
    };
};

export const findAll = () => {
  const { data: HomeData } = useQuery<ApiData[]>(
    ['HomeData'],
    async () => (await axiosClient.get('/products/all')).data,
    {
      initialData: [],
    }
  );
  return HomeData;
};

export const getCategoryAllDataLoader = async () => {
  await new Promise((r) => setTimeout(r, 500));
    return {
      data: await axiosClient.get('/products/all'),
    };
};

export const findWomen = () => {
  const { data: HomeData } = useQuery<ApiData[]>(
    ['homeData'],
    async () => (await axiosClient.get('/products/women')).data,
    {
      initialData: [],
    }
  );
  return HomeData;
};

export const getCategoryWomenDataLoader = async () => {
  await new Promise((r) => setTimeout(r, 500));
  return {
    data: await axiosClient.get('/products/women'),
  };
};

export const findMen = () => {
  const { data: HomeData } = useQuery<ApiData[]>(
    ['homeData'],
    async () => (await axiosClient.get('/products/men')).data,
    {
      initialData: [],
    }
  );
  return HomeData;
};

export const getCategoryMenDataLoader = async () => {
  await new Promise((r) => setTimeout(r, 500));
  return {
    data: await axiosClient.get('/products/men'),
  };
};

export const findAccessories = () => {
  const { data: HomeData } = useQuery<ApiData[]>(
    ['homeData'],
    async () => (await axiosClient.get('/products/accessories')).data,
    {
      initialData: [],
    }
  );
  return HomeData;
};

export const getCategoryAccessoriesDataLoader = async () => {
  await new Promise((r) => setTimeout(r, 500));
  return {
    data: await axiosClient.get('/products/accessories'),
  };
};

export const findSearch = (searchKeyWord: string) => {
  const { data: HomeData } = useQuery<ApiData[]>(
    ['SearchData'],
    async () =>
      (await axiosClient.get(`/products/search?keyword=${searchKeyWord}`)).data
        .data,
    {
      initialData: [],
    }
  );
  return HomeData;
};

export const getSearchDataLoader = async (searchKeyWord: string) => {
  await new Promise((r) => setTimeout(r, 500));
  return {
    data: await axiosClient.get(`/products/search?keyword=${searchKeyWord}`),
  };
};

export const getProductDataLoader = async (product_id: string) => {
  await new Promise((r) => setTimeout(r, 500));
  return {
    data: await axiosClient.get(`/products/details?id=${product_id}`),
  };
};

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// https://www.bezkoder.com/react-query-axios-typescript/

export const BASE_URL = "https://api.appworks-school.tw/api/1.0";

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
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
    ["SliderData"],
    async () => (await axiosClient.get("/marketing/campaigns")).data.data,
    {
      initialData: [],
    }
  );
  return SliderData;
};

export const findAll = () => {
  const { data: HomeData } = useQuery<ApiData[]>(
    ["homeData"],
    async () => (await axiosClient.get("/products/all")).data.data,
    {
      initialData: [],
    }
  );
  return HomeData;
};

export const findAllLoader = async () => {
  await new Promise((r) => setTimeout(r, 500));
  const { data } = await axiosClient.get("/products/all");
  return data;
};

export const findWomen = () => {
  const { data: HomeData } = useQuery<ApiData[]>(
    ["homeData"],
    async () => (await axiosClient.get("/products/women")).data.data,
    {
      initialData: [],
    }
  );
  return HomeData;
};

export const findMen = () => {
  const { data: HomeData } = useQuery<ApiData[]>(
    ["homeData"],
    async () => (await axiosClient.get("/products/men")).data.data,
    {
      initialData: [],
    }
  );
  return HomeData;
};

export const findAccessories = () => {
  const { data: HomeData } = useQuery<ApiData[]>(
    ["homeData"],
    async () => (await axiosClient.get("/products/accessories")).data.data,
    {
      initialData: [],
    }
  );
  return HomeData;
};

export const findSearch = (searchKeyWord: string) => {
  const { data: HomeData } = useQuery<ApiData[]>(
    ["homeData"],
    async () =>
      (await axiosClient.get(`/products/search?keyword=${searchKeyWord}`)).data
        .data,
    {
      initialData: [],
    }
  );
  return HomeData;
};

import axios from "axios";
import ApiJsonTypes from "../types/ApiJsonTypes";

// https://www.bezkoder.com/react-query-axios-typescript/

const apiClient = axios.create({
  baseURL: "https://api.appworks-school.tw/api/1.0",
  headers: {
    "Content-type": "application/json",
  },
});

const fetchData = async (url: string) => {
  return await apiClient.get(url).then((res) => res.data.data);
};

const findSlider = async () => {
  return await fetchData("/marketing/campaigns");
};

const findAll = async () => {
  return await fetchData("/products/all");
};

const findWomen = async () => {
  return await fetchData("/products/women");
};

const findMen = async () => {
  return await fetchData("/products/men");
};

const findAccessories = async () => {
  return await fetchData("/products/accessories");
};

const findSearch = async (searchKeyWord: string) => {
  return await fetchData(`/products/search?keyword=${searchKeyWord}`);
};

const fetchAPIService = {
  findSlider,
  findAll,
  findWomen,
  findMen,
  findAccessories,
  findSearch,
};

export default fetchAPIService;

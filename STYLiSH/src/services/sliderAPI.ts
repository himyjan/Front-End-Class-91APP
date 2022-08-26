import axios from "axios";

// https://www.bezkoder.com/react-query-axios-typescript/

const apiClient = axios.create({
  baseURL: "https://api.appworks-school.tw/api/1.0/marketing/campaigns",
  headers: {
    "Content-type": "application/json",
  },
});

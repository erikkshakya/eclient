import axios from "axios";

const URL = "http://192.168.1.171:8000/api/maintitle/";

export const fetchArticles = () => axios.get(URL);
export const createArticles = (data) =>
  axios.post(URL, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

import axios from 'axios'

const baseURL = "http://192.168.1.171:8000/api/maintitle/";

export const fetchSubArticle = () => axios.get(baseURL)
export const createSubArticle = (response) => axios.post(baseURL, response,{
    headers:{
      "Content-Type": response.type,
    }
})

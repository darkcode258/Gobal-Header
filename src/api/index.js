import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products"; // API base URL

// Function to create and export API methods
export const get = async (url, config = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}`, config);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || "Something went wrong");
  }
};

export const post = async (url, data = null, config = {}) => {
  try {
    const response = await axios.post(`${BASE_URL}${url}`, data, config);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || "Something went wrong");
  }
};

export const put = async (url, data = null, config = {}) => {
  try {
    const response = await axios.put(`${BASE_URL}${url}`, data, config);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || "Something went wrong");
  }
};

export const del = async (url, config = {}) => {
  try {
    const response = await axios.delete(`${BASE_URL}${url}`, config);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || "Something went wrong");
  }
};

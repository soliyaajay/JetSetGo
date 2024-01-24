import axios, { AxiosRequestConfig } from "axios";

const API_CALLER = {
  // GET API Call Function
  get: async function (url: string, config: AxiosRequestConfig = {}) {
    try {
      const response = await axios.get(url, config);
      return response;
    } catch (error: any) {
      return error;
    }
  },

  // POST API Call Function
  post: async function (
    url: string,
    body: object,
    config: AxiosRequestConfig = {}
  ) {
    try {
      const response = await axios.post(url, body, config);
      return response;
    } catch (error: any) {
      return error;
    }
  },

  //PUT API Call Function
  put: async function (
    url: string,
    body: object,
    config: AxiosRequestConfig = {}
  ) {
    try {
      const response = await axios.put(url, body, config);
      return response;
    } catch (error: any) {
      return error;
    }
  },

  //DELETE API Call Function
  delete: async function (
    url: string,
    body: string,
    config: AxiosRequestConfig = {}
  ) {
    try {
      const response = await axios.delete(url, body, config);
      return response;
    } catch (error: any) {
      return error;
    }
  },

  //MULTIPART API Call Function
  multipart: async function (url: string, formData: object) {
    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      });
      return response;
    } catch (error: any) {
      return error;
    }
  },
};
export default API_CALLER;

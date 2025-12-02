
import axios from "axios";
import { z } from "zod";
import { getBearerToken } from "./helper";


export const axiosInstance = axios.create({
  baseURL: "/api",
});

export const getAxios = <T extends z.ZodTypeAny>(
  info: any,
  responseSchema: T | null = null
): Promise<z.infer<T>> => {
  return new Promise((resolve, reject) => {
    const { url, params = {}, data = {}, method = "get" } = info;
    let dataType = "application/json";

    if (data instanceof FormData) {
      dataType = "FormData";
    }

    const headers = {
      Authorization: "Bearer " + getBearerToken(),
      "Content-Type":
        dataType === "FormData"
          ? "multipart/form-data"
          : "application/json;charset=UTF-8",
    };
    axiosInstance
      .request({ method, url, data, headers, params })
      .then((response) => {
        resolve(
          !!responseSchema ? responseSchema.parse(response.data) : response.data
        );
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const API_SERVICE = axios.create({
  baseURL: process.env.BACKEND_API_BASE_URL,
});

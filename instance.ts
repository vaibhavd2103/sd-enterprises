import axios, { AxiosResponse } from "axios";

export const BASE_URL = "http://localhost:3010/";

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const request = async <T = unknown>({
  ...options
}): Promise<
  AxiosResponse<
    { status: "success"; data: T } | { status: "error"; error: any }
  >
> => {
  try {
    const response = await instance(options);
    return response;
  } catch (error) {
    alert("Error in calling the API");
    const response = await instance(options);
    return response;
  }
};
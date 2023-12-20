import { request } from "@/instance";
import { API_ROUTES } from "@/routes";
import { RetailerType } from "@/types/retailer.types";

export const GET_ALL_RETAILERS = async () => {
  const config = {
    url: API_ROUTES.GET_ALL_RETAILERS,
    method: "get",
  };
  const response = await request<RetailerType[]>(config);
  return response;
};

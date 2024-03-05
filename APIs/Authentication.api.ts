import { request } from "@/instance";
import { API_ROUTES } from "@/routes";

export const SIGN_UP = async (body: {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  manager_id: string;
}) => {
  const config = {
    url: API_ROUTES.SIGN_UP,
    method: "post",
    data: body,
  };

  const response = await request(config);
  return response;
};

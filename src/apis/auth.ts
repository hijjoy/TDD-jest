import { axiosInstance } from "./axiosInstance";
import { SigninRequest, SigninResponse } from "../types/auth.ts";

export const signin = async ({
  email,
  password,
}: SigninRequest): Promise<SigninResponse> => {
  const { data } = await axiosInstance.post("/auth/signin", {
    email,
    password,
  });

  return data;
};

export const getUserInfo = async () => {
  const { data } = await axiosInstance.get("/users/me");

  return data;
};

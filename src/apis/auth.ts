import { axiosInstance } from "./axiosInstance";
import {
  MyInfoResponse,
  SigninRequest,
  SigninResponse,
} from "../types/auth.ts";

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

export const getMyInfo = async (): Promise<MyInfoResponse> => {
  const { data } = await axiosInstance.get("/users/me");

  return data;
};

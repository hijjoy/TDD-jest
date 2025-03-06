import { axiosInstance } from "@/shared/apis/axiosInstance.ts";
import {
  MyInfoResponse,
  SigninRequest,
  SigninResponse,
} from "@features/auth/types.ts";

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

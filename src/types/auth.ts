import { CommonResponse } from "@/types/common.ts";

export interface SigninRequest {
  email: string;
  password: string;
}

export interface SigninResponse {
  data: {
    id: number;
    name: string;
    accessToken: string;
    refreshToken: string;
  };
}

export interface MyInfoResponse {
  data: {
    id: number;
    name: string;
    email: string;
    bio: null | string;
    avatar: null | string;
    createdAt: string;
    updatedAt: string;
  };
}

type LikeDto = {
  id: number;
  userId: number;
  lpId: number;
};

type TageDto = {
  id: number;
  name: string;
};

export type LpsDto = {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  published: boolean;
  authorId: number;
  createdAt: string;
  updatedAt: string;
  tags: TageDto[];
  likes: LikeDto[];
};

export type AuthorDto = {
  id: number;
  name: string;
  email: string;
  bio: string | null;
  avatar: string | null;
  createdAt: string;
  updatedAt: string;
};

export type LpsResponse = CommonResponse<{
  data: LpsDto[];
  nextCursor: number;
  hasNext: boolean;
}>;

export type LpDetailResponse = CommonResponse<LpsDto & { author: AuthorDto }>;

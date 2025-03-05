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

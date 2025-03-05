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

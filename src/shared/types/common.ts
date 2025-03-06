export type CommonResponse<T> = {
  status: boolean;
  statusCode: string;
  message: string;
  data: T;
};

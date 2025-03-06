import { axiosInstance } from "@/shared/apis/axiosInstance.ts";
import { LikeResponse } from "@features/like/types.ts";

export const postLikes = async (lpId: number): Promise<LikeResponse> => {
  const { data } = await axiosInstance.post(`/lps/${lpId}/likes`);
  return data;
};

import { ORDER } from "@/shared/enums";
import { axiosInstance } from "@/shared/apis/axiosInstance.ts";
import { LpDetailResponse, LpsResponse } from "@features/lps/types.ts";

interface LpRequest {
  cursor: number;
  search?: string;
  order?: ORDER;
  limit: number;
}

export const getLps = async ({
  cursor,
  search,
  order = ORDER.ASC,
  limit,
}: LpRequest): Promise<LpsResponse> => {
  const { data } = await axiosInstance.get("/lps", {
    params: {
      cursor,
      search,
      order,
      limit,
    },
  });

  return data;
};

export const getLpDetail = async (id: number): Promise<LpDetailResponse> => {
  const { data } = await axiosInstance.get(`/lps/${id}`);

  return data;
};

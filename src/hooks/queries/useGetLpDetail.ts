import { useQuery } from "@tanstack/react-query";
import { getLpDetail } from "@/apis/lps.ts";

export const useGetLpDetail = (id: number) => {
  return useQuery({
    queryFn: () => getLpDetail(id),
    queryKey: ["lp", id],
    select: (data) => data.data,
  });
};

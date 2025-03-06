import { useQuery } from "@tanstack/react-query";
import { lpsKey } from "@features/lps/query-keys.ts";

export const useGetLpDetail = (id: number) => {
  return useQuery({
    queryFn: lpsKey.lp.getOne(id).queryFn,
    queryKey: lpsKey.lp.getOne(id).queryKey,
    select: (data) => data.data,
  });
};

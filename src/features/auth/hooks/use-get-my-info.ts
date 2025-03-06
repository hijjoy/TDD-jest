import { useQuery } from "@tanstack/react-query";
import { authKey } from "@features/auth/query-keys.ts";

export default function useGetMyInfo(token: string) {
  return useQuery({
    queryFn: authKey.auth.my().queryFn,
    queryKey: authKey.auth.my().queryKey,
    select: (data) => data.data,
    enabled: !!token,
  });
}

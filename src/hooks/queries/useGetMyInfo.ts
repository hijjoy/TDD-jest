import { useQuery } from "@tanstack/react-query";
import { getMyInfo } from "@/apis/auth.ts";

export default function useGetMyInfo(token: string) {
  return useQuery({
    queryFn: getMyInfo,
    queryKey: ["my"],
    select: (data) => data.data,
    enabled: !!token,
  });
}

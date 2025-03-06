import {
  DefaultError,
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";
import { getLps } from "@/apis/lps.ts";
import { LpsResponse } from "@/types/auth.ts";

export default function useGetInfiniteLps(
  queryOptions?: UseInfiniteQueryOptions<
    LpsResponse,
    DefaultError,
    InfiniteData<LpsResponse, number>,
    LpsResponse,
    QueryKey,
    number
  >,
) {
  return useInfiniteQuery({
    queryKey: ["lps"],
    queryFn: ({ pageParam }) => getLps({ cursor: pageParam, limit: 10 }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.data.hasNext ? lastPage.data.nextCursor : undefined,
    ...queryOptions,
  });
}

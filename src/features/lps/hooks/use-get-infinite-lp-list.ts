import {
  DefaultError,
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";

import { lpsKey } from "@features/lps/query-keys";
import { LpsResponse } from "@features/lps/types";
import { getLps } from "@features/lps/apis";

export function useGetInfiniteLpList(
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
    queryKey: lpsKey.lp.getAll().queryKey,
    queryFn: ({ pageParam }) => getLps({ cursor: pageParam, limit: 10 }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.data.hasNext ? lastPage.data.nextCursor : undefined,
    ...queryOptions,
  });
}

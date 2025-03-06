import { createQueryKeyStore } from "@lukemorales/query-key-factory";
import { getLpDetail, getLps } from "@features/lps/apis.ts";

export const lpsKey = createQueryKeyStore({
  lp: {
    getAll: () => ({
      queryKey: ["list"],
      queryFn: ({ pageParam = 0 }) =>
        getLps({ cursor: pageParam as number, limit: 10 }),
    }),
    getOne: (id: number) => ({
      queryKey: [id] as const,
      queryFn: () => getLpDetail(id),
    }),
  },
});

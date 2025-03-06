import { createQueryKeyStore } from "@lukemorales/query-key-factory";
import { getMyInfo } from "@features/auth/apis";

export const authKey = createQueryKeyStore({
  auth: {
    my: () => ({
      queryKey: ["info"],
      queryFn: () => getMyInfo(),
    }),
  },
});

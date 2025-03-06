import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import { useGetInfiniteLpList } from "@features/lps/hooks/use-get-infinite-lp-list";
import LPItem from "@features/lps/components/lp-item.tsx";

export default function LpList() {
  const { data, isFetching, hasNextPage, fetchNextPage } =
    useGetInfiniteLpList();

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  useEffect(() => {
    if (inView) {
      if (!isFetching && hasNextPage) {
        void fetchNextPage();
      }
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  return (
    <div
      className={
        "flex flex-wrap  items-center  justify-center py-10 w-full gap-4"
      }
    >
      {data?.pages.map((page) =>
        page.data.data.map((lp) => <LPItem lp={lp} key={lp.id} />),
      )}
      <div ref={ref} />
    </div>
  );
}

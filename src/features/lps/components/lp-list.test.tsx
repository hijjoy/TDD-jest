import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { render, renderHook, screen, waitFor } from "@testing-library/react";

import { QueryClient } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import { useGetInfiniteLpList } from "@features/lps/hooks/use-get-infinite-lp-list";
import LpList from "@features/lps/components/lp-list";

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

jest.mock("@features/lps/hooks/use-get-infinite-lp-list"); // export default라서 그냥 이렇게 할 경우 알아서 해당 모듈을 jest.fn() 로 변환
jest.mock("react-intersection-observer", () => ({
  useInView: jest.fn(() => ({
    ref: jest.fn(),
    inView: true,
  })),
}));

const mockData = {
  pages: [
    {
      data: {
        data: [{ id: "1", title: "LP 1" }],
      },
    },
  ],
  pageParams: [undefined],
};

describe("LpList", () => {
  const mockFetchNextPage = jest.fn();

  it("무한 스크롤 동작 확인 - lp데이터가 잘 불러와져서 화면에 데이터의 title이 렌더링 되는가", async () => {
    (useGetInfiniteLpList as jest.Mock).mockReturnValue({
      data: mockData,
      isFetching: false,
      hasNextPage: true,
      fetchNextPage: mockFetchNextPage,
      isSuccess: true,
    });

    // 내부에 navigation 이 있어서 MemoryRouter처리
    render(
      <MemoryRouter>
        <LpList />
      </MemoryRouter>,
      { wrapper },
    );

    // 데이터가 불러와지는지 확인
    const { result } = renderHook(() => useGetInfiniteLpList(), { wrapper });
    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    // 화면에 렌더링 되는지 확인
    expect(screen.getByText("LP 1")).toBeInTheDocument();
  });

  it("inView가 true이고 hasNextPage가 true일 때 fetchNextPage가 호출되는가", async () => {
    await waitFor(() => {
      expect(mockFetchNextPage).toHaveBeenCalledTimes(1);
    });
  });
});

import useGetMyInfo from "@/hooks/queries/useGetMyInfo.ts";

import { render, renderHook, screen, waitFor } from "@testing-library/react";
import { MyInfoResponse } from "@/types/auth";
import MyInfo from "@/components/MyInfo/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { getMyInfo } from "@/apis/auth.ts";
import { MemoryRouter, useNavigate } from "react-router-dom";

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));
jest.mock("@/apis/auth.ts");

const userMock: MyInfoResponse = {
  data: {
    id: 1,
    name: "zoe",
    email: "zoe@naver.com",
    bio: null,
    avatar: null,
    createdAt: "2024",
    updatedAt: "2024",
  },
};

describe("마이페이지", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    queryClient.clear();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  it("(로그인 O) 유저정보가 불러와져 화면에 email과 name이 화면에 렌더링 된다.", async () => {
    localStorage.setItem("accessToken", "로그인됨"); // 로그인이 되었다고 가정
    (getMyInfo as jest.Mock).mockResolvedValue({ data: userMock.data });

    const { result } = renderHook(() => useGetMyInfo("로그인됨"), {
      wrapper,
    });
    await waitFor(() => expect(result.current.isLoading).toBe(false)); // isLoading이 false가 될 때까지 기다림 -> 데이터 로딩 완료

    expect(result.current.isError).toBe(false); // 애러가 발생하지 않음
    expect(result.current.data).toEqual(userMock.data); // 모킹한 데이터와 훅에서 반환한 데이터가 같은지 확인

    render(<MyInfo />, { wrapper }); // wrapper를 통해 QueryClientProvider 컨텍스트를 제공하여 컴포넌트 내에서 React Query 훅이 올바르게 동작하도록 구현

    expect(screen.getByText("이름 : zoe")).toBeInTheDocument();
    expect(screen.getByText("이메일 : zoe@naver.com")).toBeInTheDocument();
  });

  it("(로그인 X - 토큰이 없는 경우) 로그인 화면으로 이동된다.", async () => {
    localStorage.removeItem("accessToken"); // 토큰 삭제하여 로그아웃 상태로 만듦

    // initialEntries는 테스트시 처음 사용할 url
    // useRouter 사용시에 MemoryRouter를 사용해야지 정상 동작 MemoryRouter는 브라우저의 url을 변경하지 않고 메모리에서만 경로를 관리
    render(
      <MemoryRouter initialEntries={["/my"]}>
        <MyInfo />
      </MemoryRouter>,
      { wrapper },
    );

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/");
    });
  });
});

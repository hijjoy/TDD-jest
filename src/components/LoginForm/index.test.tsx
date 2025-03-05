import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import LoginForm from "./index";
import { signin } from "@/apis/auth.ts";
import { AxiosError } from "axios";
import { SigninResponse } from "@/types/auth";

// 로그인 함수를 모킹
jest.mock("@/apis/auth", () => ({
  signin: jest.fn(),
}));

describe("로그인 입력관련", () => {
  let emailInput: HTMLElement;
  let passwordInput: HTMLElement;
  let loginButton: HTMLElement;
  let signupButton: HTMLElement;

  beforeEach(() => {
    render(<LoginForm />);
    emailInput = screen.getByPlaceholderText("이메일");
    passwordInput = screen.getByPlaceholderText("비밀번호");
    loginButton = screen.getByRole("button", { name: "로그인" });
    signupButton = screen.getByRole("button", { name: "회원가입" });
  });

  it("이메일 input이 화면에 렌더링 되는가?", () => {
    expect(emailInput).toBeInTheDocument();
  });

  it("비밀번호 input이 화면에 렌더링 되는가?", () => {
    expect(passwordInput).toBeInTheDocument();
  });

  it("로그인 버튼이 화면에 렌더링 되는가?", () => {
    expect(loginButton).toBeInTheDocument();
  });

  it("회원가입 버튼이 화면에 렌더링 되는가?", () => {
    expect(signupButton).toBeInTheDocument();
  });

  it("이메일을 입력하지 않은 경우 (또는 공백인경우) 로그인 버튼이 disabled", () => {
    fireEvent.change(emailInput, { target: { value: " " } });
    fireEvent.change(passwordInput, { target: { value: "1234qwer!!" } });

    expect(loginButton).toBeDisabled();
  });

  it("비밀번호를 입력하지 않은 경우 (또는 공백인경우) 로그인 버튼이 disabled", () => {
    fireEvent.change(emailInput, { target: { value: "ㅇㅇ" } });
    fireEvent.change(passwordInput, { target: { value: "" } });

    expect(loginButton).toBeDisabled();
  });

  it("이메일을 입력했는데, 이메일 형식에 맞지 않는 경우 error message가 렌더링됨", () => {
    fireEvent.change(emailInput, { target: { value: "zoe.com" } });
    fireEvent.change(passwordInput, { target: { value: "1234qwer!!" } });

    fireEvent.click(loginButton);

    const errorMessage = screen.getByTestId("error-message");
    expect(errorMessage).toHaveTextContent("이메일이 유효하지 않습니다");
  });
});

// 공통 부분을 묶어서 test
describe("로그인 mocking 성공/실패", () => {
  let alertMock: jest.SpyInstance;
  let emailInput: HTMLElement;
  let passwordInput: HTMLElement;
  let loginButton: HTMLElement;

  beforeEach(() => {
    render(<LoginForm />);
    emailInput = screen.getByPlaceholderText("이메일");
    passwordInput = screen.getByPlaceholderText("비밀번호");
    loginButton = screen.getByRole("button", { name: "로그인" });

    alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(() => {
    alertMock.mockRestore();
  });

  const loginMovement = (email: string, password: string) => {
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(passwordInput, { target: { value: password } });
    fireEvent.click(loginButton);
  };

  it("이메일 & 비밀번호 입력 -> 로그인 -> 성공 -> alert", async () => {
    const userMockData = {
      data: {
        id: 1,
        name: "zoe",
        accessToken: "12331",
        refreshToken: "1233123",
      },
    } as SigninResponse;

    // 성공 케이스: signin API가 성공적으로 userMockData를 반환하도록 모킹
    (signin as jest.Mock).mockResolvedValue(userMockData);

    loginMovement("zo3@naver.com", "1234qwer!!");

    const expectedMessage = userMockData.data.name + "님 안녕하세요!";

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith(expectedMessage);
    });
  });

  it("이메일 & 비밀번호 입력 -> 로그인 -> 실패 -> alert", async () => {
    const errorMockData = {
      response: {
        data: {
          status: 401,
        },
      },
    } as AxiosError;

    (signin as jest.Mock).mockRejectedValue(errorMockData);

    loginMovement("zoe@naver.com", "1234qwer!!");

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith("로그인 실패");
    });
  });
});

// 1. 이메일 창이 있는가
// 2. 비밀번호 창이 있는가
// 3. 회원가입 만든다
// 4. 버튼로그인이 잇는지
// 5. 회원가입 버튼이 있는지
// 6. 이메일하고 password 입력하고 로그인을하면 성공하고 뭐 하는지
// 7. 만약 잘못된 이메일 양식인 경우 -> 에러가 나는지
// 8.유효하지 않는 경우에 로그인 버튼을 disabled

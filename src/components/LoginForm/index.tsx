import { FormEvent, useState, ChangeEvent } from "react";
import { signin } from "@/apis/auth.ts";
import { isValidEmail } from "@/utils/email.ts";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidEmail(inputValue.email)) {
      setError("이메일이 유효하지 않습니다");
      return;
    }

    try {
      const { data } = await signin(inputValue);

      alert(data.name + "님 안녕하세요!");
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
    } catch {
      alert("로그인 실패");
    }

    setInputValue({
      email: "",
      password: "",
    });
    setError("");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">로그인</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
        <input
          value={inputValue.email}
          className="border"
          placeholder="이메일"
          onChange={handleChange}
          name="email"
        />
        {error && <p data-testid="error-message">{error}</p>}
        <input
          value={inputValue.password}
          className="border"
          placeholder="비밀번호"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <button
          className="bg-blue-300 disabled:bg-gray-300 disabled:opacity-40"
          aria-label={"로그인"}
          disabled={
            inputValue.email.trim() === "" || inputValue.password.trim() === ""
          }
        >
          로그인
        </button>
        <button className="bg-blue-300" aria-label={"회원가입"}>
          회원가입
        </button>
      </form>
    </div>
  );
}

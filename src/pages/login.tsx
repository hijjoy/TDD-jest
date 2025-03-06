import { Link } from "react-router-dom";
import LoginForm from "@features/auth/components/login-form";

export default function LoginPage() {
  return (
    <div className="size-full min-h-screen flex py-10  flex-col items-center gap-10">
      <LoginForm />
      <Link to={"/my"} className={"bg-pink-200 px-2 py-1 rounded-lg"}>
        마이페이지
      </Link>
    </div>
  );
}

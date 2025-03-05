import LoginForm from "../../components/LoginForm";
import { Link } from "react-router-dom";

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

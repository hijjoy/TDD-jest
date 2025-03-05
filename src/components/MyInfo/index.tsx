import useGetMyInfo from "@/hooks/queries/useGetMyInfo.ts";

export default function MyInfo() {
  const token = localStorage.getItem("accessToken");
  // const navigate = useNavigate();

  const { data } = useGetMyInfo(token as string);

  const { email, name } = data ?? {};

  // useEffect(() => {
  //   if (!token || isError) {
  //     navigate("/");
  //   }
  // }, [token, navigate, isError]);

  return (
    <div className={"flex flex-col items-center py-10 gap-5"}>
      <h1>내 정보</h1>
      <div>
        <p>이름 : {name}</p>
        <p>이메일 : {email}</p>
      </div>
    </div>
  );
}

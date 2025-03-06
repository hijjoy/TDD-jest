import { LpsDto } from "@/types/auth.ts";
import { useNavigate } from "react-router-dom";

export default function LPItem({ lp }: { lp: LpsDto }) {
  const navigate = useNavigate();

  return (
    <div
      className={"flex flex-col group relative"}
      onClick={() => navigate(`/lps/${lp.id}`)}
    >
      <div className={"flex items-center justify-center"}>
        <img
          src={lp.thumbnail}
          alt={"thumbnail"}
          className={"size-[300px] object-cover cursor-pointer "}
        />
      </div>

      <div
        className={
          "absolute  justify-end items-end group-hover:flex  hidden flex-col  p-5 bg-black/50 inset-0 transition-transform duration-500 hover:scale-105"
        }
      >
        <p className={"font-semibold px-1 py-2 text-white"}>{lp.title}</p>
      </div>
    </div>
  );
}

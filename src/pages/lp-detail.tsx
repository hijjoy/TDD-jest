import { useParams } from "react-router-dom";
import { useGetLpDetail } from "@features/lps/hooks/use-get-lp-detail";
import LikeButton from "@features/like/components/like-button.tsx";
import { LikeDto } from "@features/lps/types.ts";

export default function LpDetailPage() {
  const { id } = useParams();

  const { data } = useGetLpDetail(Number(id));
  const { thumbnail, title, author, likes } = data ?? {};

  return (
    <div
      className={
        "flex flex-col items-center justify-center h-full min-h-screen relative overflow-hidden"
      }
    >
      <div className="bg-[#141414] rounded-full p-44 absolute -top-20 -left-32 animate-spin-slow border-black border-4 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-[radial-gradient(circle,#000_5%,transparent_10%,#000_10%,transparent_25%,#000_40%,transparent_50%,#000_80%,transparent_80%)] before:opacity-30">
        <img
          src={thumbnail}
          alt={"thumbnail"}
          className={
            "size-64 object-cover rounded-full border-black/20 border-[10px]"
          }
        />
      </div>
      <div className={"absolute bottom-48 left-10"}>
        <div className={"flex  items-center  gap-2"}>
          <p className={"text-black text-2xl font-bold"}>{title}</p>
          <LikeButton likes={likes as LikeDto[]} />
        </div>
        <p className={"text-black text-base opacity-80"}>{author?.name}</p>
      </div>
    </div>
  );
}

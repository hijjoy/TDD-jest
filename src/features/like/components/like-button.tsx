import { FaRegHeart } from "react-icons/fa";
import { LikeDto } from "@features/lps/types.ts";
import useGetMyInfo from "@features/auth/hooks/use-get-my-info";
import { FaHeart } from "react-icons/fa";
import usePostLikes from "@features/like/hooks/usePostLikes.ts";
import { useParams } from "react-router-dom";

interface IProps {
  likes: LikeDto[];
}

export default function LikeButton({ likes }: IProps) {
  const token = localStorage.getItem("accessToken");
  const { id } = useParams();
  const { data: user } = useGetMyInfo(token as string);

  const like = likes?.map((like) => like.userId).includes(user?.id as number);

  const likePost = usePostLikes();

  const handleLike = () => {
    if (like) {
      // 좋아요 취소 아직 구현 X
      return;
    }

    likePost.mutate(Number(id));
  };

  return (
    <button onClick={handleLike}>
      {like ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
    </button>
  );
}

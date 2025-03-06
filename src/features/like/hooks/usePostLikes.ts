import { useMutation } from "@tanstack/react-query";
import { postLikes } from "@features/like/apis.ts";
import { queryClient } from "@/main.tsx";
import { lpsKey } from "@features/lps/query-keys.ts";
import { authKey } from "@features/auth/query-keys.ts";
import { MyInfoResponse } from "@features/auth/types.ts";
import { LpDetailResponse } from "@features/lps/types.ts";

export default function usePostLikes() {
  return useMutation({
    mutationFn: postLikes,

    // 낙관적 업데이트
    onMutate: async (lpId) => {
      await queryClient.invalidateQueries({
        queryKey: lpsKey.lp.getOne(lpId).queryKey,
      });

      const user = queryClient.getQueryData<MyInfoResponse>(
        authKey.auth.my().queryKey,
      );

      const userId = Number(user?.data.id);

      const previousPost = queryClient.getQueryData<LpDetailResponse>(
        lpsKey.lp.getOne(lpId).queryKey,
      );

      const newPost = {
        ...previousPost,
      } as LpDetailResponse;

      const likeIndex =
        previousPost?.data.likes.findIndex((like) => like.userId === userId) ??
        -1;

      likeIndex >= 0
        ? newPost?.data.likes?.splice(likeIndex, 1)
        : newPost?.data.likes?.push({ id: Date.now(), userId, lpId });

      queryClient.setQueryData(lpsKey.lp.getOne(lpId).queryKey, newPost);

      return { newPost, previousPost };
    },
    onError: (_err, _newPost, context) => {
      queryClient.setQueryData(
        lpsKey.lp.getOne(Number(context?.previousPost?.data.id)).queryKey,
        context?.previousPost,
      );
    },

    onSettled: (_data, _error, variables) => {
      queryClient.invalidateQueries({
        queryKey: lpsKey.lp.getOne(variables).queryKey,
      });
    },
  });
}

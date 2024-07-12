"use client";

import { toggleLikeMember } from "@/actions/likeAction";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  targetId: string;
  hasLiked: boolean;
}

const LikeButton: FC<Props> = ({ targetId, hasLiked }: Props): JSX.Element => {
  const router = useRouter();

  async function toggleLike() {
    await toggleLikeMember(targetId, hasLiked);
    router.refresh();
  }
  return (
    <div
      onClick={toggleLike}
      className="relative hover:opacity-80 transition cursor-pointer"
    >
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />
      <AiFillHeart
        size={24}
        className={hasLiked ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
};

export default LikeButton;
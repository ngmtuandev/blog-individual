"use client";
import React, { useEffect, useState } from "react";
import axiosClient from "../libs/axios-client";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@nextui-org/react";
import ModelComment from "./ModelComment";
import { useAuthStore } from "../store/auth.store";
const DetailPost = ({ post }: { post: TPost }) => {
  const router = useRouter();
  const dataUser = useAuthStore((state: any) => state.dataUser);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleLikePost = async (slug: string) => {
    const res = await axiosClient.put(`/posts/${slug}/like`);
    if (res) {
      router.refresh();
    }
  };

  console.log("post like", post?.likes);
  console.log("dataUser", dataUser);

  return (
    <div className="flex flex-col px-11 justify-center items-center">
      <div className="justify-center">
        <img
          src={post?.thumb}
          className="lg:w-full justify-center lg:h-[400px] object-cover my-4"
          alt="banner-post"
        ></img>
      </div>
      <div>
        <div className="py-5 flex-col flex justify-center border-t-1 border-b-1 my-6">
          <div className="flex items-center gap-6">
            <span
              onClick={() => handleLikePost(post?.slug)}
              className="cursor-pointer"
            >
              {post?.likes?.includes(dataUser?._id)
                ? `Bỏ thích (${post?.likes?.length})`
                : `Thích (${post?.likes?.length})`}
            </span>
            <span className="cursor-pointer" onClick={onOpen}>
              Comment
            </span>
          </div>
        </div>
        <div>
          <h3 className="uppercase mb-6 lg:text-[32px] font-semibold text-gray-800">
            {post?.title}
          </h3>
          <div dangerouslySetInnerHTML={{ __html: post?.content }} />
        </div>
      </div>
      <ModelComment
        slug={post?.slug}
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      ></ModelComment>
    </div>
  );
};

export default DetailPost;

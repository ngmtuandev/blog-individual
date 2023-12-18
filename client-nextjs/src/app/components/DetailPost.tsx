"use client";
import React, { useEffect, useState } from "react";
import axiosClient from "../libs/axios-client";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@nextui-org/react";
import ModelComment from "./ModelComment";
const DetailPost = ({ post }: { post: TPost }) => {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleLikePost = async (slug: string) => {
    const res = await axiosClient.put(`/posts/${slug}/like`);
    if (res) {
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <img
          src={post?.thumb}
          className="lg:w-full lg:h-[400px] object-cover my-4"
          alt="banner-post"
        ></img>
      </div>
      <div>
        <div className="py-5 border-t-1 border-b-1 my-6">
          <div className="flex items-center gap-6">
            <span
              onClick={() => handleLikePost(post?.slug)}
              className="cursor-pointer"
            >
              {`Like (${post?.likes?.length})`}
            </span>
            <span className="cursor-pointer" onClick={onOpen}>
              Comment
            </span>
            <span>Like</span>
          </div>
        </div>
        <div>
          <h3 className="uppercase lg:text-[32px] font-semibold text-gray-800">
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

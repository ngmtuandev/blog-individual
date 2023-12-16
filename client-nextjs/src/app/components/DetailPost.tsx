"use client";
import React from "react";
import axiosClient from "../libs/axios-client";
import { useRouter } from "next/navigation";

const DetailPost = ({ post }: { post: TPost }) => {
  const router = useRouter();
  console.log("post >>>>", post);
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
          className="lg:w-full lg:h-full object-cover my-4"
          alt="banner-post"
        ></img>
      </div>
      <div>
        <div>
          <h3 className="uppercase lg:text-[32px] font-semibold text-gray-800">
            {post?.title}
          </h3>
          <div dangerouslySetInnerHTML={{ __html: post?.content }} />
          {/* <span>{post?.content}</span> */}
        </div>
        <div className="py-5 border-t-1 border-b-1 my-6">
          <div className="flex items-center gap-6">
            <span
              onClick={() => handleLikePost(post?.slug)}
              className="cursor-pointer"
            >
              {`Like (${post?.likes?.length})`}
            </span>
            <span>Like</span>
            <span>Like</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPost;

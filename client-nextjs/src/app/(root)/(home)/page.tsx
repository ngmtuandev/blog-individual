"use client";
import React, { useEffect, useState } from "react";
import axiosClient from "@/app/libs/axios-client";
import Post from "@/app/components/Post";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const rs = await axiosClient("/posts", {
        method: "get",
      });
      setPosts(rs?.data?.data);
    })();
  }, []);
  return (
    <div className="text-gray-800 flex gap-5 flex-wrap items-center justify-center mt-8 ">
      {posts &&
        posts?.map((item, index) => {
          return (
            <div key={index} className="w-[30%]">
              <Post></Post>
            </div>
          );
        })}
    </div>
  );
};

export default HomePage;

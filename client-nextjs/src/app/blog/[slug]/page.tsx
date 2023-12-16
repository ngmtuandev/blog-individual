import DetailPost from "@/app/components/DetailPost";
import Image from "next/image";
import React from "react";

async function getData(slug: string) {
  const res = await fetch(`https://hif-api.onrender.com/api/v1/posts/${slug}`, {
    next: { revalidate: 0 },
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const DetailPostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  let post = await getData(slug);
  post = post?.data;
  return (
    <div>
      <DetailPost post={post}></DetailPost>
    </div>
  );
};

export default DetailPostPage;

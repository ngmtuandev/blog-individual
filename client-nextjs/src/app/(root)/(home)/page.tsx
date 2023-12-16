import Post from "@/app/components/Post";
import { useAuthStore } from "@/app/store/auth.store";

async function getPosts() {
  const res = await fetch("https://hif-api.onrender.com/api/v1/posts", {
    next: {
      revalidate: 0,
    },
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

export default async function HomePage() {
  let post = await getPosts();
  post = post?.data;
  return (
    <div className="flex mt-6 justify-center gap-8 flex-wrap">
      {post &&
        post?.map((item: TPost) => {
          return (
            <div className="w-[28%] lg:my-4" key={item?._id}>
              <Post post={item}></Post>
            </div>
          );
        })}
    </div>
  );
}

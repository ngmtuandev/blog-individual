import Post from "@/app/components/Post";
import { useAuthStore } from "@/app/store/auth.store";

// async function getPosts() {
//   const token = useAuthStore((state: any) => state.token);
//   console.log("token", token);
//   const res = await fetch("https://hif-api.onrender.com/api/v1/posts", {
//     method: "get",
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//     },
//   });
//   console.log("res ssr >>>", res);
//   return res.json();
// }

export default async function HomePage() {
  const token = useAuthStore((state: any) => state.token);
  console.log("token", token);
  // const post = await getPosts();
  // console.log("post", post);
  return <div>dsadsada</div>;
}

// const HomePage = () => {
//   // const [posts, setPosts] = useState([]);
//   // useEffect(() => {
//   //   (async () => {
//   //     const rs = await axiosClient("/posts", {
//   //       method: "get",
//   //     });
//   //     setPosts(rs?.data?.data);
//   //   })();
//   // }, []);
//   return (
//     <div className="text-gray-800 flex gap-5 flex-wrap items-center justify-center mt-8 ">
//       {/* {posts &&
//         posts?.map((item, index) => {
//           return (
//             <div key={index} className="w-[30%]">
//               <Post></Post>
//             </div>
//           );
//         })} */}
//     </div>
//   );
// };

// export default HomePage;

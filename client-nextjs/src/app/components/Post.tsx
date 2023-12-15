import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Skeleton } from "@nextui-org/react";
import Link from "next/link";

const Post = ({ post }: { post: TPost }) => {
  console.log("post item ", post);
  return (
    <Link href={`/blog/${post?.slug}`}>
      <Card className="py-4 lg:min-h-full">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{post?.title}</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={
              post?.thumb ??
              "https://images.pexels.com/photos/16756656/pexels-photo-16756656/free-photo-of-black-and-white-photo-of-a-swan-on-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            width={370}
          />
        </CardBody>
      </Card>
    </Link>
  );
};

export default Post;

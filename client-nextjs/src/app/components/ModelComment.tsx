"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import axiosClient from "../libs/axios-client";
import { User } from "@nextui-org/react";
import useSWR from "swr";

const getComment = async (url: string) => {
  try {
    const rs = await fetch(url);
    const data = await rs.json();
    console.log("data test ??", data);
    return data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error; // Re-throw the error to let SWR handle it
  }
};

export default function ModelComment({
  isOpen,
  onOpen,
  onOpenChange,
  slug,
}: {
  isOpen: any;
  onOpen: any;
  onOpenChange: any;
  slug: string;
}) {
  const [scrollBehavior, setScrollBehavior] = React.useState<
    "inside" | "normal" | "outside" | undefined
  >("inside");
  async function addComment(formData: FormData) {
    const rs = await axiosClient(`/comment/${slug}`, {
      method: "POST",
      data: { text: formData.get("text") },
    });
    mutate();
  }

  const { data, mutate, isLoading, error } = useSWR(
    `https://hif-api.onrender.com/api/v1/posts/${slug}/comment`,
    getComment
  );
  console.log("slug >>>", slug);
  console.log("check data swr >>>", data);
  if (error) {
    console.error("Error fetching comments:", error);
  }

  return (
    <div className="flex w-[80%] flex-col gap-2">
      <Modal
        size="4xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior={scrollBehavior}
        className="scroll-auto"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <form action={addComment}>
                <ModalHeader className="flex flex-col gap-1">
                  Modal Title
                </ModalHeader>
                <ModalBody>
                  <input
                    placeholder="Text"
                    className="border-none outline-none placeholder:text-[24px] w-[100%] h-[40px]"
                    name="text"
                  ></input>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button type="submit" color="primary">
                    {isLoading ? "..." : "Comment"}
                  </Button>
                </ModalFooter>
              </form>
              <div className="w-full h-auto overflow-auto scrollbar-none scrollbar-thumb-gray-900 scrollbar-track-gray-100 mb-5 px-8 flex flex-col gap-5">
                {data &&
                  data?.data?.map((item: any) => {
                    return (
                      <div className="mb-3 pb-3 border-b-1" key={item?._id}>
                        <div>
                          <User
                            name={item?.user?.name}
                            description={item?.user?.username}
                            avatarProps={{
                              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                            }}
                          />
                        </div>
                        <span className="mt-2">{item?.text}</span>
                      </div>
                    );
                  })}
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

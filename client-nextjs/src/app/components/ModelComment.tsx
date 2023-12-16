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
import { useRouter } from "next/navigation";

export default function ModelComment({
  isOpen,
  onOpen,
  onOpenChange,
  slug,
  comment,
  setValidate,
  validate,
}: {
  isOpen: any;
  onOpen: any;
  onOpenChange: any;
  slug: string;
  comment: any;
  setValidate: any;
  validate: any;
}) {
  const [scrollBehavior, setScrollBehavior] = React.useState<
    "inside" | "normal" | "outside" | undefined
  >("inside");
  const router = useRouter();
  async function addComment(formData: FormData) {
    const rs = await axiosClient(`/comment/${slug}`, {
      method: "POST",
      data: { text: formData.get("text") },
    });
    setValidate(!validate);
    console.log("rs : ", rs);
  }
  console.log("test comment new >>>>", comment);

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
                  <input name="text"></input>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button type="submit" color="primary">
                    Action
                  </Button>
                </ModalFooter>
              </form>
              <div>
                {comment &&
                  comment?.map((item: any) => {
                    return (
                      <div key={item?._id}>
                        <span>{item?.text}</span>
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

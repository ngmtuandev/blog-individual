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
    console.log("rs : ", rs);
  }

  return (
    <div className="flex w-[80%] flex-col gap-2">
      <Modal
        size="4xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior={scrollBehavior}
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
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

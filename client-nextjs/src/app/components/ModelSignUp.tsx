import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import swal from "sweetalert";
import { MailIcon } from "../asset/icons/MailIcon";
import { LockIcon } from "../asset/icons/LockIcon ";
import axiosClient from "../libs/axios-client";
export default function ModelSignUp({
  isOpen,
  onOpenChange,
  onOpen,
}: {
  isOpen: any;
  onOpenChange: any;
  onOpen: any;
}) {
  async function createInvoice(formData: FormData) {
    const rawFormData = {
      username: formData.get("username"),
      password: formData.get("password"),
      name: formData.get("name"),
    };

    console.log("form data >>>", rawFormData);

    const response = await axiosClient("/auth/register", {
      data: rawFormData,
      method: "post",
    });
    console.log(response);

    if (+response?.data?.status === 0) {
      swal({
        title: `Register account successfully`,
        icon: "success",
      });
    } else {
      swal({
        title: `Register account fairlure`,
        icon: "warning",
      });
      return;
    }
  }

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Sign Up</ModalHeader>
              <ModalBody>
                <form action={createInvoice}>
                  <Input
                    autoFocus
                    endContent={
                      <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Username"
                    name="username"
                    placeholder="Enter your username"
                    variant="bordered"
                  />
                  <Input
                    endContent={
                      <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    name="password"
                    variant="bordered"
                  />
                  <Input
                    label="Name"
                    placeholder="Enter your name"
                    name="name"
                    type="text"
                    variant="bordered"
                  />
                  <div className="flex py-2 px-1 justify-between">
                    <Checkbox
                      classNames={{
                        label: "text-small",
                      }}
                    >
                      Remember me
                    </Checkbox>
                    <Link color="primary" href="#" size="sm">
                      Forgot password?
                    </Link>
                  </div>
                  <ModalFooter>
                    <Button color="danger" variant="flat" onPress={onClose}>
                      Close
                    </Button>
                    <Button type="submit" color="primary">
                      Sign up
                    </Button>
                  </ModalFooter>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

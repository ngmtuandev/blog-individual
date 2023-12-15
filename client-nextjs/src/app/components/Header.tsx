"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import ModelLogin from "../components/ModelLogin";
import ModelSignUp from "../components/ModelSignUp";
import { useAuthStore } from "../store/auth.store";
import { User } from "@nextui-org/react";
import { useEffect } from "react";

export default function Layout() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isOpenSignUp,
    onOpen: onOpenSignUp,
    onOpenChange: onOpenChangeSignUp,
  } = useDisclosure();
  const dataUser = useAuthStore((state: any) => state.dataUser);
  console.log("dataUser check new >>>>>", dataUser);
  const isLogin = useAuthStore((state: any) => state.isLogin);
  console.log("is login >>>", isLogin);
  const setDataUser = useAuthStore((state: any) => state.setDataUser);
  const setIsLogin = useAuthStore((state: any) => state.setIsLogin);
  useEffect(() => {
    setDataUser();
  }, []);
  return (
    <div>
      <div>
        <Navbar>
          <NavbarBrand>
            <div className="font-bold text-inherit sm:text-[30px] lg:text-[36px]">
              <span>Hi</span>
              <span className="text-primary">F</span>
            </div>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#">
                Features
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Integrations
              </Link>
            </NavbarItem>
          </NavbarContent>
          {!isLogin ? (
            <NavbarContent justify="end">
              <NavbarItem className="hidden lg:flex">
                <Link href="#" onPress={onOpen}>
                  Login
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Button
                  onPress={onOpenSignUp}
                  as={Link}
                  color="primary"
                  href="#"
                  variant="flat"
                >
                  Sign Up
                </Button>
              </NavbarItem>
            </NavbarContent>
          ) : (
            <NavbarContent justify="end">
              <NavbarItem className="hidden lg:flex">
                <Dropdown backdrop="blur">
                  <DropdownTrigger
                    onClick={() => {
                      setDataUser(null);
                    }}
                  >
                    <User
                      name={dataUser?.name}
                      description={dataUser?.username}
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                      }}
                    />
                  </DropdownTrigger>
                  <DropdownMenu variant="faded" aria-label="Static Actions">
                    <DropdownItem key="new">New file</DropdownItem>
                    <DropdownItem key="copy">Copy link</DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setDataUser(null);
                        setIsLogin(false);
                        localStorage.removeItem("user-login-blog");
                      }}
                      key="edit"
                    >
                      Logout account
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavbarItem>
            </NavbarContent>
          )}
        </Navbar>
        <ModelLogin
          isOpen={isOpen}
          onOpen={onOpen}
          onOpenChange={onOpenChange}
        ></ModelLogin>
        <ModelSignUp
          isOpen={isOpenSignUp}
          onOpen={onOpenSignUp}
          onOpenChange={onOpenChangeSignUp}
        ></ModelSignUp>
      </div>
    </div>
  );
}

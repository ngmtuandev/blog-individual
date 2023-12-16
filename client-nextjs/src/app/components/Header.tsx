"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Link from "next/link";

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
  const isLogin = useAuthStore((state: any) => state.isLogin);
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
            <Link href="/">
              <div className="font-bold text-inherit sm:text-[30px] lg:text-[36px]">
                <span className="text-gray-900">Hi</span>
                <span className="text-primary">F</span>
              </div>
            </Link>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#">
                Features
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="true">
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
                <Button href="#" onPress={onOpen}>
                  Login
                </Button>
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
                  <DropdownTrigger>
                    <User
                      name={dataUser?.name}
                      description={dataUser?.username}
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                      }}
                    />
                  </DropdownTrigger>
                  {/* <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="new">New file</DropdownItem>
                    <DropdownItem key="copy">Copy link</DropdownItem>
                    <DropdownItem key="edit">Edit file</DropdownItem>
                    <DropdownItem
                      key="delete"
                      className="text-danger"
                      color="danger"
                    >
                      Delete file
                    </DropdownItem>
                  </DropdownMenu> */}
                  <DropdownMenu variant="faded" aria-label="Static Actions">
                    {/* {+dataUser?.role === 1 ? (
                      <DropdownItem key="new">
                        <Link href="/create-blog">New post</Link>
                      </DropdownItem>
                    ) : (
                      <React.Fragment></React.Fragment>
                    )} */}
                    <DropdownItem key="new">
                      <Link href={+dataUser?.role === 1 ? "/create-blog" : "/"}>
                        {dataUser?.role === 1 ? "New post" : "Home"}
                      </Link>
                    </DropdownItem>
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

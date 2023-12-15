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
import ModelLogin from "../components/ModelLogin";
import ModelSignUp from "../components/ModelSignUp";
import { useAuthStore } from "../store/auth.store";
import { User } from "@nextui-org/react";

export default function Layout() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isOpenSignUp,
    onOpen: onOpenSignUp,
    onOpenChange: onOpenChangeSignUp,
  } = useDisclosure();
  const dataUser = useAuthStore((state: any) => state.dataUser);
  console.log("dataUser >>>>>", dataUser);
  const isLogin = useAuthStore((state: any) => state.isLogin);
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
                <User
                  name={dataUser?.name}
                  description="Product Designer"
                  avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                  }}
                />
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

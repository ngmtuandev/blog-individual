import { create } from "zustand";
import axiosClient from "../libs/axios-client";

export const useAuthStore = create((set) => ({
  dataUser: null,
  isLogin: !!localStorage.getItem("user-login-blog"),
  setIsLogin: (isLogin: boolean) => set({ isLogin }),
  setDataUser: async () => {
    const token = localStorage.getItem("user-login-blog");
    if (token) {
      try {
        const user = await axiosClient(`/auth/me`);
        if (user) {
          set({ dataUser: user?.data?.data });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      set({ dataUser: undefined });
    }
  },
}));

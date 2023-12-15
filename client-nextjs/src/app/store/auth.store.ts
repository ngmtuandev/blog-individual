import { create } from "zustand";

export const useAuthStore = create((set) => ({
  dataUser: null,
  isLogin: !!localStorage.getItem("user-login-blog"),
  setDataUser: async () => {
    const token = localStorage.getItem("user-login-blog");
    if (token) {
      try {
        const user;
      } catch (error) {
        console.log(error);
      }
    } else {
      set({ dataUser: undefined });
    }
  },
}));

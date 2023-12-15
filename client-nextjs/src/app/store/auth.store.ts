import { create } from "zustand";

export const useAuthStore = create((set) => ({
  dataUser: null,
  isLogin: !!localStorage.getItem("user-login-blog"),
  setDataUser: async (user: TUser) => {
    const token = localStorage.getItem("user-login-blog");
    if (token) {
      set({ dataUser: user });
    } else {
      set({ dataUser: undefined });
    }
  },
}));

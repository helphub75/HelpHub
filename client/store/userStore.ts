import { loginType, signUpType } from "@/types";
import { create } from "zustand";

type userState = {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: any | null;
  login: (formData: loginType) => Promise<void>;
  signUp: (formData: signUpType) => Promise<void>;
  logOut: () => Promise<void>;
};

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

export const useUserStore = create<userState>((set) => ({
  ...initialState,
  signUp: async (formData) => {
    set({ isLoading: true });
    try {
      const response = await fetch("https://your-api-url/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Sign Up Failed");
      const userData = await response.json();
      set({ user: userData, isAuthenticated: true });
    } catch (error) {
      console.error("Sign Up Error", error);
    } finally {
      set({ isLoading: false });
    }
  },
  login: async (formData) => {
    set({ isLoading: true });
    try {
      const response = await fetch("https://your-api-url/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Login Failed");
      const userData = await response.json();
      set({ user: userData, isAuthenticated: true });
    } catch (error) {
      console.error("Login Error", error);
    } finally {
      set({ isLoading: false });
    }
  },
  logOut: async () => {
    set({ isLoading: true });
    try {
      set({ ...initialState });
    } catch (error) {
      console.error("Logout Error", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

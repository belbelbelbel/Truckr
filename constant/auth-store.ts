import { create } from "zustand"
import { persist } from "zustand/middleware"

interface AuthState {
  isLoggedIn: boolean
  user: {
    name: string
    email: string
    avatar: string
  } | null
  login: (user: { name: string; email: string; avatar: string }) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,
      login: (user) => set({ isLoggedIn: true, user }),
      logout: () => set({ isLoggedIn: false, user: null }),
    }),
    {
      name: "auth-storage",
    },
  ),
)

"use client"

import Navbar from "@/component/Navbar"
import { ProfileContent } from "@/components/profilecontent"
import { RentSidebar } from "@/components/rent-sidebar"
import { ChevronRight, User } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"



export default function ProfilePage() {
  const routes = useRouter()
  const menuItems = [
    {
      label: "My Profile",
      href: "/profile",
      icon: <User className="h-5 w-5" />,
      active: true,
    },
    {
      label: "Account setting",
      href: "/profile/settings",
      icon: <span className="text-lg">⚙️</span>,
      active: false,
    },
    {
      label: "My listings",
      href: '/list',
      icon: <span className="text-lg">📋</span>,
      active: false,
    },
    {
      label: "Wishlist",
      href: "/profile/saved",
      icon: <span className="text-lg">❤️</span>,
      active: false,
    },
    {
      label: "Switch to Renting",
      href: "/rent",
      icon: <span className="text-lg">🔄</span>,
      active: false,
    },
  ];

  const bottomItem = {
    label: "Log Out",
    icon: <span className="text-lg">🚪</span>,
    trailing: <span className="ml-auto">↗</span>,
    action: () => routes.push('/auth/login'),
  };
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Navbar />
      <div className="flex">
        <RentSidebar />
        <div className="flex-1">
          <ProfileContent />
        </div>
      </div>
    </div>
  )
}

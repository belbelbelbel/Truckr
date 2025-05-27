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
        {/* <RentSidebar /> */}
        <div className="w-64 bg-white border-r min-h-screen">
          <div className="p-6 space-y-4">
            {menuItems.map((item, index) =>
              item.href ? (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex items-center space-x-3 ${item.active ? "text-blue-600 bg-blue-50 font-medium" : "text-gray-700 hover:text-blue-600"
                    } cursor-pointer p-2 rounded`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {/* <ChevronRight className="h-4 w-4 ml-auto" /> */}
                </Link>
              ) : (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-blue-600 font-medium cursor-pointer bg-blue-50 p-2 rounded"
                >
                  {item.icon}
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4 ml-auto" />
                </div>
              )
            )}

            {/* Bottom Logout */}
            <div className=" px-1 pt-8">
              <div
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer"
                onClick={bottomItem.action}
              >
                {bottomItem.icon}
                <span>{bottomItem.label}</span>
                {bottomItem.trailing}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <ProfileContent />
        </div>
      </div>
    </div>
  )
}

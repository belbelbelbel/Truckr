"use client"
import { User, Settings, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function ListingSidebar() {
  const pathname = usePathname()

  const menuItems = [
    {
      icon: User,
      label: "My Profile",
      href: "/profile",
    },
    {
      icon: Settings,
      label: "Account setting",
      href: "profile/settings",
    },
    {
      icon: "📋",
      label: "My listings",
      href: "/listings",
    },
    {
      icon: "❤️",
      label: "Wishlist",
      href: "/profile/saved",
    },
    {
      icon: "🔄",
      label: "Switch to Renting",
      href: "/rent",
    },
  ]

  return (
    <div className="w-64 bg-white border-r min-h-screen">
      <div className="p-6 space-y-4">
        {menuItems.map((item:any) => {
          const isActive = pathname === item.href
          const Icon = typeof item.icon === "string" ? null : item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                isActive ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              {Icon ? <Icon className="h-5 w-5" /> : <span className="text-lg">{item.icon}</span>}
              <span className="flex-1">{item.label}</span>
            </Link>
          )
        })}

        <div className="pt-8 border-t">
          <button className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer p-3 rounded-lg hover:bg-gray-50 w-full">
            <LogOut className="h-5 w-5" />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </div>
  )
}

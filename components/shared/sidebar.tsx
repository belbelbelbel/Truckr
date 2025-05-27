"use client"
import { User, MessageSquare, Clock, DollarSign, RotateCcw, Settings, LogOut, ChevronRight, Heart } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

interface SidebarProps {
  className?: string
}

export function ProfileSidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const routes = useRouter()

  const menuItems = [
    {
      icon: User,
      label: "My Profile",
      href: "/profile",
      badge: null,
    },
    {
      icon: MessageSquare,
      label: "Messages",
      href: "",
      badge: 1,
    },
    {
      icon: Clock,
      label: "Rent History",
      href: "/history",
      badge: null,
    },
    {
      icon: DollarSign,
      label: "Spendings",
      href: "",
      badge: null,
    },
    {
      icon: Heart,
      label: "My Saved",
      href: "saved",
      badge: null,
    },
    {
      icon: "❓",
      label: "Requests",
      href: "",
      badge: 1,
    },
    {
      icon: RotateCcw,
      label: "Switch to Listing",
      href: "/list",
      badge: null,
    },
    {
      icon: Settings,
      label: "Account setting",
      href: "settings",
      badge: null,
    },
  ]

  return (
    <div className={`w-64 bg-transparent border-r min-h-screen ${className}`}>
      <div className="p-6 space-y-2">
        {menuItems.map((item:any)=> {
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
              {item.badge && (
                <Badge
                  variant="destructive"
                  className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                >
                  {item.badge}
                </Badge>
              )}
              {/* <ChevronRight className="h-4 w-4 text-gray-400" /> */}
            </Link>
          )
        })}

        <div className="pt-8 border-t">
          <button className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer p-3 rounded-lg hover:bg-gray-50 w-full" onClick={() => routes.push('/auth/login')}>
            <LogOut className="h-5 w-5" />
            <span>Log Out</span>
            <span className="ml-auto text-sm">↗</span>
          </button>
        </div>
      </div>
    </div>
  )
}

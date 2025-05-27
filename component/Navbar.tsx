"use client"
import { Button } from "@/components/ui/button"
import { NavliNKS } from "@/constant/truck-data"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useCartStore } from "@/constant/cart-store"
import { useAuthStore } from "@/constant/auth-store"

export default function Navbar() {
  const routes = useRouter()
  const pathname = usePathname()
  const totalItems = useCartStore((state) => state.getTotalItems())
  const { isLoggedIn, user, logout } = useAuthStore()

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href)
  }

  return (
    <header className="border-b bg-white text-black sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            TRUCKR
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          {NavliNKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={` hover:text-blue-600 font-medium ${isActive(link.href) ? "text-blue-600" : "text-gray-700"}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <div className="flex items-center space-x-2 cursor-pointer" onClick={() => routes.push("/cart")}>
                <span className="text-gray-700 font-medium">My Cart</span>
                <Button variant="ghost" size="sm" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">{user?.name?.charAt(0) || "D"}</span>
                </div>
                <div
                  className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center cursor-pointer"
                  onClick={logout}
                >
                  <span className="text-xs">☰</span>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 cursor-pointer" onClick={() => routes.push("/cart")}>
                <span className="text-gray-700 font-medium">My Cart</span>
                <Button variant="ghost" size="sm" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                </Button>
              </div>
              <Link href="/auth/login">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Sign In
                </Button>
              </Link>
              {/* <Link href="/auth/register">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Sign Up</Button>
              </Link> */}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

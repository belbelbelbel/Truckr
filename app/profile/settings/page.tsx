"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ShoppingCart, Edit, ChevronRight, User } from "lucide-react"
import Link from "next/link"
import { ProfileSidebar } from "@/components/shared/sidebar"
import { useRouter } from "next/navigation"
import Navbar from "@/component/Navbar"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    email: "oyekunledamilare111@gmail.com",
    phone: "+234 123456789",
    address: "No 9, damilare street, Okada rd, Kaduna",
    password: "************************",
  })
  const routes = useRouter()
  const menuItems = [
    {
      label: "My Profile",
      href: "/profile",
      icon: <User className="h-5 w-5" />,
      active: false,
    },
    {
      label: "Account setting",
      href: "/profile/settings",
      icon: <span className="text-lg">⚙️</span>,
      active: true,
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
      {/* Header */}
      <Navbar />

      <div className="flex">
        {/* <ProfileSidebar /> */}
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

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Setting</h1>

            <div className="bg-white rounded-lg shadow p-8 space-y-8">
              {/* Email Address */}
              <div>
                <Label className="text-lg font-semibold text-gray-900 mb-4 block">Email Address</Label>
                <div className="relative">
                  <div className="flex items-center p-4 border border-gray-300 rounded-lg bg-gray-50">
                    <span className="text-gray-400 mr-3">✉</span>
                    <span className="flex-1 text-gray-900">{settings.email}</span>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <Label className="text-lg font-semibold text-gray-900 mb-4 block">Phone Number</Label>
                <div className="relative">
                  <div className="flex items-center p-4 border border-gray-300 rounded-lg bg-gray-50">
                    <span className="flex-1 text-gray-900">{settings.phone}</span>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                  {/* Profile indicator */}
                  <div className="absolute right-16 top-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">O</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <Label className="text-lg font-semibold text-gray-900 mb-4 block">Address</Label>
                <div className="relative">
                  <div className="flex items-center p-4 border border-gray-300 rounded-lg bg-gray-50">
                    <span className="text-gray-400 mr-3">📍</span>
                    <span className="flex-1 text-gray-900">{settings.address}</span>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Password */}
              <div>
                <Label className="text-lg font-semibold text-gray-900 mb-4 block">Password</Label>
                <div className="relative">
                  <div className="flex items-center p-4 border border-gray-300 rounded-lg bg-gray-50">
                    <span className="flex-1 text-gray-900">{settings.password}</span>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Profile Indicators */}
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">T</span>
                  </div>
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">O</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 max-w-md mb-4">
            <span className="text-lg">📧</span>
            <span className="font-medium">Subscribe to Newsletter</span>
          </div>
          <div className="flex max-w-md space-x-2">
            <Input placeholder="Enter your Name" className="flex-1" />
            <Input placeholder="Enter your Email" className="flex-1" />
            <Button className="bg-blue-600 hover:bg-blue-700 px-6">
              <span className="text-lg">➤</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TruckR</h3>
              <p className="text-gray-600 mb-4">
                At TruckR, we're redefining how Nigeria moves, one truck at a time. Whether you're relocating,
                delivering goods, or managing logistics for your business, we offer reliable, affordable, and convenient
                truck rentals tailored to your needs. With a network of trusted drivers and easy online booking, we make
                transportation in Lagos stress-free.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                  <span className="text-white text-sm">X</span>
                </div>
                <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center">
                  <span className="text-white text-sm">in</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Our Contact</h4>
              <div className="space-y-2 text-gray-600">
                <p>Location</p>
                <p>Products</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Our Contact</h4>
              <div className="space-y-2 text-gray-600">
                <p>Email</p>
                <p>Twitter</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Location</h4>
              <div className="space-y-2 text-gray-600">
                <p>Lagos State</p>
                <p>Ogun State</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Our Products</h4>
              <div className="space-y-2 text-gray-600">
                <p>Flatbed Truck</p>
                <p>Tanker Truck</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 mt-8 pt-8 flex justify-between items-center">
            <p className="text-gray-600">Copyright ©2025. All Rights Reserved. — Truckr</p>
            <div className="flex space-x-6 text-gray-600">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms & Condition</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

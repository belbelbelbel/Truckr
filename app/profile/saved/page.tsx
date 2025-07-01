"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, ChevronRight, User, LogOut } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ProfileSidebar } from "@/components/shared/sidebar"
import Navbar from "@/component/Navbar"
import { useRouter } from "next/navigation"

interface SavedItem {
  id: string
  name: string
  image: string
  quantity: number
  amount: number
  status: "Available" | "Booked"
}

export default function SavedPage() {
  const [savedItems, setSavedItems] = useState<SavedItem[]>([
    {
      id: "1",
      name: "Hovo Forklift 219",
      image: "/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png",
      quantity: 1,
      amount: 20000,
      status: "Available",
    },
    {
      id: "2",
      name: "Hovo Forklift 219",
      image: "/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png",
      quantity: 2,
      amount: 20000,
      status: "Booked",
    },
    {
      id: "3",
      name: "Hovo Forklift 219",
      image: "/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png",
      quantity: 3,
      amount: 20000,
      status: "Booked",
    },
  ])

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
      active: true,
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
    icon: <span className="text-lg"><LogOut className="h-5 w-5" /></span>,
    trailing: <span className="ml-auto">↗</span>,
    action: () => routes.push('/auth/login'),
  };

  const isEmpty = false // Change to true to show empty state

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
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">My Saved</h1>

            {isEmpty ? (
              /* Empty State */
              <div className="text-center py-16">
                <div className="mb-8">
                  <Image
                    src="/assets/Character.png"
                    alt="Empty saved items"
                    width={400}
                    height={300}
                    className="mx-auto"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">OOPS! Nothing here</h2>
                <p className="text-gray-600 mb-8">You do not have any saved item.</p>
                <Link href="/rent">
                  <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3">Add to Saved</Button>
                </Link>
              </div>
            ) : (
              <>
                {/* Table View */}
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="grid grid-cols-6 gap-4 p-4 border-b font-medium text-gray-600 bg-gray-50">
                    <div>Item</div>
                    <div>Item Name</div>
                    <div>Quantity Available</div>
                    <div>Amount</div>
                    <div>Status</div>
                    <div></div>
                  </div>

                  {savedItems.map((item) => (
                    <div key={item.id} className="grid grid-cols-6 gap-4 p-4 border-b items-center hover:bg-gray-50">
                      <div>
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={60}
                          height={60}
                          className="rounded object-cover"
                        />
                      </div>
                      <div className="font-medium text-gray-900">{item.name}</div>
                      <div className="text-gray-600">{item.quantity}</div>
                      <div className="font-medium text-gray-900">₦{item.amount.toLocaleString()}</div>
                      <div>
                        <Badge
                          variant={item.status === "Available" ? "secondary" : "destructive"}
                          className={
                            item.status === "Available" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }
                        >
                          {item.status}
                        </Badge>
                      </div>
                      <div className="flex items-center">
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Link href="/list/new">
                    <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3">Add to Listing</Button>
                  </Link>
                </div>
              </>
            )}
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
            <input placeholder="Enter your Name" className="flex-1 px-3 py-2 border rounded" />
            <input placeholder="Enter your Email" className="flex-1 px-3 py-2 border rounded" />
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

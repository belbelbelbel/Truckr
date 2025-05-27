"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ProfileSidebar } from "@/components/shared/sidebar"

export default function HistoryPage() {
  const isEmpty = true // Set to false when there's history data

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
   
      <header className="bg-white border-b">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">Logo</span>
            </div>
            <Link href="/" className="text-2xl font-bold text-blue-600">
              TRUCKR
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/rent" className="text-gray-700 hover:text-blue-600 font-medium">
              Rent
            </Link>
            <Link href="/list" className="text-gray-700 hover:text-blue-600 font-medium">
              List
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-700 font-medium">My Cart</span>
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  5
                </span>
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center">
                <span className="text-xs">☰</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <ProfileSidebar />

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">History</h1>

            {isEmpty ? (
              /* Empty State */
              <div className="text-center py-16">
                <div className="mb-8">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-27%20at%2011.20.52-oLArTB5iDJaQla5ZqJCc46P5DeZU07.png"
                    alt="Empty history"
                    width={400}
                    height={300}
                    className="mx-auto"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">OOPS! Nothing here</h2>
                <p className="text-gray-600 mb-8">You do not have any history</p>
                <Link href="/rent">
                  <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3">Continue Renting</Button>
                </Link>
              </div>
            ) : (
              /* History Content - when there's data */
              <div className="bg-white rounded-lg shadow p-6">
                <p className="text-gray-600">Your rental history will appear here.</p>
              </div>
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

"use client"

import Navbar from "@/component/Navbar"
import { RentSidebar } from "@/components/rent-sidebar"

export default function MessagesPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Navbar />
      <div className="flex">
        <RentSidebar />
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Messages</h1>
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <p className="text-gray-600">No messages yet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

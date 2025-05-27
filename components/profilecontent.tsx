"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User } from "lucide-react"
import Image from "next/image"

export function ProfileContent() {
  const [formData, setFormData] = useState({
    firstName: "Damilare",
    lastName: "Oyekunle",
    email: "oyekunledamilare111@gmail.com",
    phone: "+234 123456789",
    nin: "1234567890",
    state: "Ogun",
    lga: "Ota",
  })

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Profile Header */}
      <div className="text-center mb-8">
        <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden">
          <Image
            src=""
            alt="Profile"
            width={96}
            height={96}
            className="rounded-full object-cover w-full h-full"
          />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
        <p className="text-gray-600">Account Information</p>
      </div>

      {/* Profile Form */}
      <div className="bg-white rounded-lg shadow p-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label className="text-base font-medium text-gray-900 mb-2 block">First Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                value={formData.firstName}
                onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                className="pl-10 h-12 border-gray-300"
              />
            </div>
          </div>

          <div>
            <Label className="text-base font-medium text-gray-900 mb-2 block">Last Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                value={formData.lastName}
                onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                className="pl-10 h-12 border-gray-300"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <Label className="text-base font-medium text-gray-900 mb-2 block">Email Address</Label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">✉</span>
              <Input
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                className="pl-10 h-12 border-gray-300"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <Label className="text-base font-medium text-gray-900 mb-2 block">Phone Number</Label>
            <Input
              value={formData.phone}
              onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
              className="h-12 border-gray-300"
            />
          </div>

          <div className="md:col-span-2">
            <Label className="text-base font-medium text-gray-900 mb-2 block">
              National Identification Number (NIN)
            </Label>
            <div className="relative">
              <Input
                value={formData.nin}
                onChange={(e) => setFormData((prev) => ({ ...prev, nin: e.target.value }))}
                className="h-12 border-gray-300 pr-12"
              />
              <div className="absolute right-3 top-3">
                <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">T</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Label className="text-base font-medium text-gray-900 mb-2 block">State</Label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">📍</span>
              <Input
                value={formData.state}
                onChange={(e) => setFormData((prev) => ({ ...prev, state: e.target.value }))}
                className="pl-10 h-12 border-gray-300"
              />
            </div>
          </div>

          <div>
            <Label className="text-base font-medium text-gray-900 mb-2 block">LGA</Label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">📍</span>
              <Input
                value={formData.lga}
                onChange={(e) => setFormData((prev) => ({ ...prev, lga: e.target.value }))}
                className="pl-10 h-12 border-gray-300"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Button className="bg-blue-600 hover:bg-blue-700 px-8">Save Changes</Button>
        </div>
      </div>
    </div>
  )
}

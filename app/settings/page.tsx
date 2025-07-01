"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ShoppingCart, Edit } from "lucide-react"
import Link from "next/link"
import { ProfileSidebar } from "@/components/shared/sidebar"
import Navbar from "@/component/Navbar"
import Footer from "@/component/Footer"
import { RentSidebar } from "@/components/rent-sidebar"

export default function SettingsPage() {
    const [settings, setSettings] = useState({
        email: "oyekunledamilare111@gmail.com",
        phone: "+234 123456789",
        address: "No 9, damilare street, Okada rd, Kaduna",
        password: "************************",
    })

    return (
        <div className="min-h-screen bg-gray-50 font-inter">
            {/* Header */}
            <Navbar />
            <div className="flex">
               <RentSidebar/>

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
                                    {/* <div className="absolute right-16 top-3">
                                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                            <span className="text-white text-sm font-bold">O</span>
                                        </div>
                                    </div> */}
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
                            {/* <div className="flex items-center space-x-4 pt-4">
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">T</span>
                                    </div>
                                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">O</span>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

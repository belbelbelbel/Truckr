"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ProfileSidebar } from "@/components/shared/sidebar"
import Navbar from "@/component/Navbar"
import Footer from "@/component/Footer"
import { RentSidebar } from "@/components/rent-sidebar"

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

    const isEmpty = false // Change to true to show empty state

    return (
        <div className="min-h-screen bg-gray-50 font-inter">
            {/* Header */}
            <Navbar />

            <div className="flex">
               <RentSidebar/>

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
                                    <Link href="/listings/new">
                                        <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3">Add to Listing</Button>
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

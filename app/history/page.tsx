"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ProfileSidebar } from "@/components/shared/sidebar"
import Navbar from "@/component/Navbar"
import Footer from "@/component/Footer"
import { RentSidebar } from "@/components/rent-sidebar"

export default function HistoryPage() {
    const isEmpty = true // Set to false when there's history data

    return (
        <div className="min-h-screen bg-gray-50 font-inter">
            <Navbar />

            <div className="flex">
              <RentSidebar/>

                {/* Main Content */}
                <div className="flex-1 p-8">
                    <div className="max-w-6xl mx-auto">
                        <h1 className="text-3xl font-bold text-gray-900 mb-8">History</h1>

                        {isEmpty ? (
                            /* Empty State */
                            <div className="text-center py-16">
                                <div className="mb-8">
                                    <Image
                                        src="/assets/Character.png"
                                        alt="Empty history"
                                        width={400}
                                        height={300}
                                        className="mx-auto h-80"
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
            <Footer />
        </div>
    )
}

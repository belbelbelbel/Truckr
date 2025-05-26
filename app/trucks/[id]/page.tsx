"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, ShoppingCart, User, ChevronLeft, ChevronRight, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { trucksData } from "@/constant/truck-data"

// interface TruckDetailPageProps {
//   params: {
//     id: any
//   }
// }

export default function TruckDetailPage({ params }: any) {
  const truck = trucksData.find((t) => t.id === params.id) || trucksData[0]
  const [selectedImage, setSelectedImage] = useState(0)
  const [rentalPeriod, setRentalPeriod] = useState("Select Date")
  const [siteLocation, setSiteLocation] = useState("Select Date")
  const [pickupOption, setPickupOption] = useState("Select Date")
  const [addOns, setAddOns] = useState("Select Date")

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">Logo</span>
            </div> */}
            <Link href="/" className="text-2xl font-bold text-blue-600">
              TRUCKR
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/rent" className="text-gray-700 hover:text-blue-600 font-medium">
              Rent
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
                  0
                </span>
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center">
                <span className="text-xs">☰</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={truck.images[selectedImage] || "/placeholder.svg"}
                    alt={truck.name}
                    width={600}
                    height={400}
                    className="w-full h-126 object-contain"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={() => setSelectedImage(Math.max(0, selectedImage - 1))}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={() => setSelectedImage(Math.min(truck.images.length - 1, selectedImage + 1))}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>

                  {/* Dots indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {truck.images.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === selectedImage ? "bg-white" : "bg-white/50"}`}
                        onClick={() => setSelectedImage(index)}
                      />
                    ))}
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="p-4">
                  <div className="flex space-x-3">
                    {truck.images.slice(0, 3).map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative w-20 h-16 rounded-lg overflow-hidden border-2 ${
                          selectedImage === index ? "border-blue-600" : "border-gray-200"
                        }`}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${truck.name} ${index + 1}`}
                          width={80}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About this Equipment */}
            <Card>
              <CardHeader>
                <CardTitle className="text-black">About this Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  The CAT 320 Excavator sets the standard for efficiency and fuel economy in this size class. This
                  excavator offers the industry's highest level of standard factory technology to boost productivity.
                </p>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-black">Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 py-2 border-b">
                    <span className="text-gray-600">Model</span>
                    <span className="text-gray-600">Skyjack - SJ3220RT</span>
                    <span className="text-gray-600">Year</span>
                    <span className="font-medium text-black">2020</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 py-2 border-b">
                    <span className="text-gray-600">Weight</span>
                    <span className="font-medium text-black">120 Tons</span>
                    <span className="text-gray-600">Year</span>
                    <span className="font-medium text-black">2020</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 py-2 border-b">
                    <span className="text-gray-600">Fuel Type</span>
                    <span className="font-medium text-black">Diesel</span>
                    <span className="text-gray-600">Transmission</span>
                    <span className="font-medium text-black">Manual</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 py-2">
                    <span className="text-gray-600">Fuel Tank Capacity</span>
                    <span className="font-medium text-black">100L</span>
                    <span className="text-gray-600">Maker</span>
                    <span className="font-medium text-black">Toyota</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-black">Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm text-black">Bluetooth</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm text-black">Extra Tires</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm text-black">Air Condition</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm text-black">GPS Tracker</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm text-black">Rear Cameras</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Truck Owner */}
            <Card>
              <CardHeader>
                <CardTitle className="text-black">Truck Owner</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">D</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-black">Demilore O</h3>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                        Owner
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Rent Calculator Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-black">Rent Calculator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">₦20,000</div>
                  <div className="text-gray-600">/day</div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black">Rental Period</label>
                    <Select value={rentalPeriod} onValueChange={setRentalPeriod}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 day</SelectItem>
                        <SelectItem value="2">2 days</SelectItem>
                        <SelectItem value="3">3 days</SelectItem>
                        <SelectItem value="7">1 week</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-black">Site Location</label>
                    <Select value={siteLocation} onValueChange={setSiteLocation}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lagos">Lagos</SelectItem>
                        <SelectItem value="abuja">Abuja</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-black">Pick up option</label>
                    <Select value={pickupOption} onValueChange={setPickupOption}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pickup">Pick up</SelectItem>
                        <SelectItem value="delivery">Delivery</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-black">Add-Ons</label>
                    <Select value={addOns} onValueChange={setAddOns}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="driver">Driver</SelectItem>
                        <SelectItem value="insurance">Insurance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                  Request Truck
                </Button>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-black">Secure Rentals</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm text-gray-600">Verified Payment</span>
                      </div>
                      <p className="text-xs text-gray-500 ml-6">All transactions are protected by our escrow system.</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm text-gray-600">Verified Owner</span>
                    </div>
                    <p className="text-xs text-gray-500 ml-6">This owner has been verified by TruckR</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-black">Available</h4>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm text-gray-600">
                        This Truck is available on TruckR till 24th of May 2025
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

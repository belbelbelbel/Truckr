"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, ChevronLeft, ChevronRight, Check } from 'lucide-react'
import Image from "next/image"
import { trucksData } from "@/constant/truck-data"
import { useCartStore } from "@/constant/cart-store"
import { toast } from "sonner"
import Navbar from "@/component/Navbar"
import { PaymentModals } from "@/components/payments-modals"
import { chunk } from "lodash";
import React from "react"

// interface TruckDetailPageProps {
//   params: {
//     id: string
//   }
// }

export default function TruckDetailPage({ params }: any) {
  const truck = trucksData.find((t) => t.id === params.id) || trucksData[0]
  const [selectedImage, setSelectedImage] = useState(0)
  const [rentalPeriod, setRentalPeriod] = useState("Select Date")
  const [siteLocation, setSiteLocation] = useState("Select Date")
  const [pickupOption, setPickupOption] = useState("Select Date")
  const [addOns, setAddOns] = useState("Select Date")
  const [showPaymentModal, setShowPaymentModal] = useState(false)


  const addItem = useCartStore((state) => state.addItem)

  const handleRequestTruck = () => {
    // Validate form
    if (rentalPeriod === "Select Date" || siteLocation === "Select Date" ||
      pickupOption === "Select Date" || addOns === "Select Date") {
      toast.error("Please fill in all rental details")
      return
    }

    
 
    addItem({
      id: truck.id,
      name: truck.name,
      image: truck.images[0],
      price: truck.price,
      rentalPeriod,
      siteLocation,
      pickupOption,
      addOns
    })

    toast.success("Truck added to cart!")

    // setShowPaymentModal(true)
  }

  const handlePaymentComplete = () => {
    toast.success("Payment completed successfully!")
  }

     const specifications = [
      { label: "Model", value: "Skyjack - SJ3220RT" },
      { label: "Year", value: "2020" },
      { label: "Weight", value: "120 Tons" },
      { label: "Year", value: "2020" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "Transmission", value: "Manual" },
      { label: "Fuel Tank Capacity", value: "100L" },
      { label: "Maker", value: "Toyota" },
    ];

    const chunkedSpecs = chunk(specifications, 2);

    // Add to ca

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={truck.images[selectedImage] || "/placeholder.svg"}
                    alt={truck.name}
                    width={600}
                    height={400}
                    className="w-full h-96 object-contain"
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
                        className={`relative w-20 h-16 rounded-lg overflow-hidden border-2 ${selectedImage === index ? "border-blue-600" : "border-gray-200"
                          }`}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${truck.name} ${index + 1}`}
                          width={80}
                          height={64}
                          className="w-full h-full object-contain"
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
                  {chunkedSpecs.map((row:any, rowIndex:any) => (
                    <div
                      key={rowIndex}
                      className={`grid grid-cols-4 gap-4 py-2 ${rowIndex !== chunkedSpecs.length - 1 ? "border-b" : ""}`}
                    >
                      {row.map((item:any, i:any) => (
                        <React.Fragment key={i}>
                          <span className="text-gray-600">{item.label}</span>
                          <span className="font-medium text-black">{item.value}</span>
                        </React.Fragment>
                      ))}
                      {/* If row has only one pair, fill remaining columns */}
                      {row.length === 1 && (
                        <>
                          <span></span>
                          <span></span>
                        </>
                      )}
                    </div>
                  ))}
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
                  <div className="text-3xl font-bold text-black">₦{truck.price.toLocaleString()}</div>
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
                        <SelectValue placeholder="Select Location" />
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
                        <SelectValue placeholder="Select Option" />
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
                        <SelectValue placeholder="Select Add-ons" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="driver">Driver</SelectItem>
                        <SelectItem value="insurance">Insurance</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  size="lg"
                  onClick={handleRequestTruck}
                >
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

      {/* Payment Modal */}
      <PaymentModals
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        onComplete={handlePaymentComplete}
        totalAmount={truck.price}
      />
    </div>
  )
}

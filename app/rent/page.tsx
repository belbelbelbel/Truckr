"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Heart, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { trucksData, truckCategories, filterTrucks, defaultFilters, type FilterState } from "@/constant/truck-data"
import { RentSidebar } from "@/components/rent-sidebar"
import Navbar from "@/component/Navbar"


export default function RentPage() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters)
  const [likedTrucks, setLikedTrucks] = useState<Set<string>>(new Set())

  const filteredTrucks = filterTrucks(trucksData, filters)

  const handleCategoryChange = (category: string) => {
    setFilters((prev) => ({ ...prev, category }))
  }

  const toggleLike = (truckId: string) => {
    setLikedTrucks((prev) => {
      const newLiked = new Set(prev)
      if (newLiked.has(truckId)) {
        newLiked.delete(truckId)
      } else {
        newLiked.add(truckId)
      }
      return newLiked
    })
  }

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />

      <div className="flex">
        <RentSidebar />

        {/* Main Content - Simple Truck Grid */}
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Simple Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Available Trucks</h1>
              <div className="flex items-center space-x-4">
                <Input placeholder="Search trucks..." className="max-w-md" />
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3">
                {truckCategories.map((category) => (
                  <Button
                    key={category}
                    variant={filters.category === category ? "default" : "outline"}
                    className={`px-4 py-2 rounded-full ${
                      filters.category === category ? "bg-blue-600 text-white" : "text-gray-700 border-gray-300"
                    }`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Simple Trucks Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTrucks.map((truck) => (
                <Card key={truck.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <Image
                      src={truck.images[0] || "/placeholder.svg"}
                      alt={truck.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1">{truck.category}</Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                      onClick={() => toggleLike(truck.id)}
                    >
                      <Heart className={`h-4 w-4 ${likedTrucks.has(truck.id) ? "fill-red-500 text-red-500" : ""}`} />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 text-black">{truck.name}</h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{truck.location}</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm ml-1 text-black">{truck.rating}</span>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg text-black">₦{truck.price.toLocaleString()}</p>
                        <p className="text-sm text-gray-600">/Day</p>
                      </div>
                    </div>
                    <Link href={`/trucks/${truck.id}`}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Rent this Truck</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

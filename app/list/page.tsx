"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Plus, Grid3X3, Search, ShoppingCart, User, ChevronRight, Edit, Trash2, X, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Footer from "@/component/Footer"

interface Listing {
  id: string
  name: string
  image: string
  condition: string
  amount: number
  status: "Approved" | "Failed" | "In Progress"
  listedDate: string
  location: string
}

const sampleListings: Listing[] = [
  {
    id: "1",
    name: "Hovo Forklift 219",
    image: "/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png",
    condition: "Fair",
    amount: 20000,
    status: "Failed",
    listedDate: "23rd of May, 2025",
    location: "Ikeja,Lagos",
  },
  {
    id: "2",
    name: "Hovo Forklift 219",
    image: "/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png",
    condition: "Fair",
    amount: 20000,
    status: "In Progress",
    listedDate: "23rd of May, 2025",
    location: "Ikeja,Lagos",
  },
  {
    id: "3",
    name: "Hovo Forklift 219",
    image: "/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png",
    condition: "Good",
    amount: 20000,
    status: "Approved",
    listedDate: "23rd of May, 2025",
    location: "Ikeja,Lagos",
  },
]

export default function ListingsPage() {
  const [listings, setListings] = useState<Listing[]>(sampleListings)
  const [viewMode, setViewMode] = useState<"table" | "grid">("table")
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleEdit = (listing: Listing) => {
    setSelectedListing(listing)
    setShowEditModal(true)
  }

  const handleDelete = (listing: Listing) => {
    setSelectedListing(listing)
    setShowDeleteModal(true)
  }

  const confirmDelete = () => {
    if (selectedListing) {
      setListings(listings.filter((l) => l.id !== selectedListing.id))
      setShowDeleteModal(false)
      setSelectedListing(null)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "text-green-600"
      case "Failed":
        return "text-red-600"
      case "In Progress":
        return "text-orange-600"
      default:
        return "text-gray-600"
    }
  }

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-800"
      case "Failed":
        return "bg-red-100 text-red-800"
      case "In Progress":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Header */}
      <header className="bg-white border-b">
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
            <Link href="/list" className="text-blue-600 font-medium">
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
                  0
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
        {/* Sidebar */}
        <div className="w-64 bg-white border-r min-h-[50%]">
          <div className="p-6 space-y-4">
            <div className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer">
              <User className="h-5 w-5" />
              <span>My Profile</span>
              <ChevronRight className="h-4 w-4 ml-auto" />
            </div>

            <div className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer">
              <span className="text-lg">⚙️</span>
              <span>Account setting</span>
              <ChevronRight className="h-4 w-4 ml-auto" />
            </div>

            <div className="flex items-center space-x-3 text-blue-600 font-medium cursor-pointer bg-blue-50 p-2 rounded">
              <span className="text-lg">📋</span>
              <span>My listings</span>
              <ChevronRight className="h-4 w-4 ml-auto" />
            </div>

            <div className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer">
              <span className="text-lg">❤️</span>
              <span>Wishlist</span>
              <ChevronRight className="h-4 w-4 ml-auto" />
            </div>

            <div className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer">
              <span className="text-lg">🔄</span>
              <span>Switch to Renting</span>
              <ChevronRight className="h-4 w-4 ml-auto" />
            </div>

            <div className="pt-8">
              <div className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer">
                <span className="text-lg">🚪</span>
                <span>Log Out</span>
                <span className="ml-auto">↗</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Listings</h1>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={() => setViewMode(viewMode === "table" ? "grid" : "table")}>
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4" />
              </Button>
              <Link href="/list/new">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Listing
                </Button>
              </Link>
            </div>
          </div>

          {listings.length === 0 ? (
            /* Empty State */
            <div className="text-center py-16">
              <div className="mb-8">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="No listings"
                  width={400}
                  height={300}
                  className="mx-auto"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">OOPS! Nothing here</h2>
              <p className="text-gray-600 mb-8">You do not have any listed item.</p>
              <Link href="/list/new">
                <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3">Add to Listing</Button>
              </Link>
            </div>
          ) : viewMode === "table" ? (
            /* Table View */
            <div className="bg-white rounded-lg shadow">
              <div className="grid grid-cols-6 gap-4 p-4 border-b font-medium text-gray-600">
                <div>Item</div>
                <div>Item Name</div>
                <div>Condition</div>
                <div>Amount</div>
                <div>Status</div>
                <div></div>
              </div>

              {listings.map((listing) => (
                <div key={listing.id} className="grid grid-cols-6 gap-4 p-4 border-b items-center hover:bg-gray-50">
                  <div>
                    <Image
                      src={listing.image || "/placeholder.svg"}
                      alt={listing.name}
                      width={60}
                      height={60}
                      className="rounded object-contain"
                    />
                  </div>
                  <div className="font-medium text-gray-900">{listing.name}</div>
                  <div className="text-gray-600">{listing.condition}</div>
                  <div className="font-medium text-gray-900">₦{listing.amount.toLocaleString()}</div>
                  <div className={getStatusColor(listing.status)}>{listing.status}</div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" onClick={() => handleEdit(listing)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(listing)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map((listing) => (
                <Card key={listing.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <Image
                      src={listing.image || "/placeholder.svg"}
                      alt={listing.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-contain"
                    />
                    <Badge className={`absolute top-3 left-3 ${getStatusBadgeColor(listing.status)}`}>
                      {listing.status}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-center">{listing.name}</h3>
                    <div className="flex justify-center space-x-4 mt-4">
                      <Button variant="outline" size="sm" onClick={() => handleEdit(listing)}>
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(listing)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {listings.length > 0 && (
            <div className="mt-8 text-center">
              <Link href="/list/new">
                <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3">Add to Listing</Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
        <DialogContent className="max-w-md">
          <div className="text-center p-6">
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4"
              onClick={() => setShowEditModal(false)}
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="mb-6">
              <Image
                src="/placeholder.svg?height=150&width=200"
                alt="Forklift"
                width={200}
                height={150}
                className="mx-auto"
              />
            </div>

            <div className="mb-6">
              <p className="text-gray-900 font-medium">You listed this Truck on {selectedListing?.listedDate}</p>
              <p className="text-gray-600">{selectedListing?.location}</p>
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Edit className="h-4 w-4 mr-2" />
                Edit Listing
              </Button>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setShowEditModal(false)
                  setShowDeleteModal(true)
                }}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Remove Listing
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <Dialog open={showDeleteModal} onOpenChange={setShowDeleteModal}>
        <DialogContent className="max-w-md">
          <div className="text-center p-6">
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4"
              onClick={() => setShowDeleteModal(false)}
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="mb-6">
              <Image
                src="/placeholder.svg?height=150&width=200"
                alt="Forklift"
                width={200}
                height={150}
                className="mx-auto"
              />
            </div>

            <div className="mb-6">
              <p className="text-gray-900 font-medium">
                Are you sure you want to remove this listing? you will be deleting it permanently.
              </p>
            </div>

            <div className="space-y-3">
              <Button variant="outline" className="w-full" onClick={() => setShowDeleteModal(false)}>
                Cancel
              </Button>

              <Button className="w-full bg-red-600 hover:bg-red-700" onClick={confirmDelete}>
                <Trash2 className="h-4 w-4 mr-2" />
                Yes, Delete
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="max-w-md">
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-white" />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Listing Submitted</h2>
            <p className="text-gray-600">
              Your Truck Listing has been submitted, you will received a confirmation email soon. thank you.
            </p>
          </div>
        </DialogContent>
      </Dialog>


      {/* Footer */}
      <Footer />
    </div>
  )
}

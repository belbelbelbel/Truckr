"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Plus, Grid3X3, Search, ShoppingCart, User, ChevronRight, Edit, Trash2, X, Check, LogOut } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { getUserListings, deleteUserListing, type UserListing } from "@/constant/user-listings"
import Footer from "@/component/Footer"
import Navbar from "@/component/Navbar"
import { useRouter } from "next/navigation"

export default function ListingsPage() {
  const [listings, setListings] = useState<UserListing[]>([])
  const [viewMode, setViewMode] = useState<"table" | "grid">("table")
  const [selectedListing, setSelectedListing] = useState<UserListing | null>(null)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const routes = useRouter()

  // Load user listings
  useEffect(() => {
    setListings(getUserListings())
  }, [])

  const handleEdit = (listing: UserListing) => {
    setSelectedListing(listing)
    setShowEditModal(true)
  }

  const handleDelete = (listing: UserListing) => {
    setSelectedListing(listing)
    setShowDeleteModal(true)
  }

  const confirmDelete = () => {
    if (selectedListing) {
      deleteUserListing(selectedListing.id)
      setListings(getUserListings())
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

  const menuItems = [
    {
      label: "My Profile",
      href: "/profile",
      icon: <User className="h-5 w-5" />,
      active: false,
    },
    {
      label: "Account setting",
      href: "/profile/settings",
      icon: <span className="text-lg">⚙️</span>,
      active: false,
    },
    {
      label: "My listings",
      href: '/list',
      icon: <span className="text-lg">📋</span>,
      active: true,
    },
    {
      label: "Wishlist",
      href: "/profile/saved",
      icon: <span className="text-lg">❤️</span>,
      active: false,
    },
    {
      label: "Switch to Renting",
      href: "/rent",
      icon: <span className="text-lg">🔄</span>,
      active: false,
    },
  ];

  const bottomItem = {
    label: "Log Out",
    icon: <span className="text-lg"><LogOut className="h-5 w-5" /></span>,
    trailing: <span className="ml-auto">↗</span>,
    action: () => routes.push('/auth/login'),
  };


  return (
    <div className="min-h-screen  font-inter">
      {/* Header */}
      <Navbar />

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r min-h-screen">
          <div className="p-6 space-y-4">
            {menuItems.map((item, index) =>
              item.href ? (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex items-center space-x-3 ${item.active ? "text-blue-600 bg-blue-50 font-medium" : "text-gray-700 hover:text-blue-600"
                    } cursor-pointer p-2 rounded`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {/* <ChevronRight className="h-4 w-4 ml-auto" /> */}
                </Link>
              ) : (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-blue-600 font-medium cursor-pointer bg-blue-50 p-2 rounded"
                >
                  {item.icon}
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4 ml-auto" />
                </div>
              )
            )}

            {/* Bottom Logout */}
            <div className=" px-1 pt-8">
              <div
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer"
                onClick={bottomItem.action}
              >
                {bottomItem.icon}
                <span>{bottomItem.label}</span>
                {bottomItem.trailing}
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
                  src="/assets/Character.png"
                  alt="No listings"
                  width={400}
                  height={300}
                  className="mx-auto h-90"
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
                      src={listing.photos[0] || "/placeholder.svg"}
                      alt={listing.name}
                      width={60}
                      height={60}
                      className="rounded object-cover"
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
                      src={listing.photos[0] || "/placeholder.svg"}
                      alt={listing.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
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
                src={selectedListing?.photos[0] || "/placeholder.svg"}
                alt="Truck"
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
                src={selectedListing?.photos[0] || "/placeholder.svg"}
                alt="Truck"
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

      <Footer />
    </div>
  )
}

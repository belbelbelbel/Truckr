"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { toast } from "sonner"
import { useCartStore } from "@/constant/cart-store"
import Navbar from "@/component/Navbar"
import { PaymentModals } from "@/components/payments-modals"

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCartStore()
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty")
      return
    }
    setShowPaymentModal(true)
  }

  const handlePaymentComplete = () => {
    clearCart()
    toast.success("Payment completed successfully!")
  }

  const isEmpty = items.length === 0

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="bg-gradient-to-r from-gray-900 to-gray-700 flex items-center relative h-64 text-white" style={{
        backgroundImage: `url('/assets/f54b64a9-5d1d-465d-94e5-33bc97549c39 1.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container z-50 relative  mx-auto px-4 text-center">
          <h1 className="text-4xl  font-bold">CART 🛒</h1>
        </div>
        <div className="absolute bg-black/70 inset-0"></div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {isEmpty ? (
          <Card className="text-center py-16">
            <CardContent>
              <div className="text-8xl mb-6">🛒</div>
              <h2 className="text-2xl font-bold mb-4">OOPS! Nothing here</h2>
              <p className="text-gray-600 mb-8">Your Cart is Empty!</p>
              <Button className="bg-blue-600 hover:bg-blue-700">Add to Cart</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid  lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            {/* 🖥️ Desktop Table View */}
            <div className="lg:col-span-2 hidden md:block">
              <Card>
                <CardHeader>
                  <CardTitle>Cart Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Table Header */}
                    <div className="grid grid-cols-6 gap-4 text-sm font-medium text-gray-600 border-b pb-2">
                      <div>Item</div>
                      <div>Item Name</div>
                      <div>Quantity</div>
                      <div>Amount</div>
                      <div>Request Status</div>
                      <div></div>
                    </div>

                    {/* Cart Items */}
                    {items.map((item) => (
                      <div key={item.id} className="grid grid-cols-6 gap-4 items-center py-4 border-b">
                        <div>
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={80}
                            height={60}
                            className="rounded object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button size="sm" variant="outline">
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="font-medium">₦{item.price.toLocaleString()}</div>
                        <div>
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            {item.status}
                          </Badge>
                        </div>
                        <div>
                          <Button size="sm" variant="ghost" className="text-red-600">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* 📱 Mobile Card View */}
            <div className="space-y-4 md:hidden">
              {items.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm border">
                  <div className="flex items-start gap-3">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={60}
                      className="rounded object-cover"
                    />
                    <div className="flex-1 relative">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <p className="text-orange-600 font-semibold mt-1 text-sm">
                        ₦{item.price.toLocaleString()}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="p-1 h-6 w-6"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-6 text-center text-sm">{item.quantity}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          className="p-1 h-6 w-6"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="mt-2 absolute right-8 top-5">
                        <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                          {item.status || "Approved"}
                        </Badge>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-red-600"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>


            {/* Order Summary */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Total Items</span>
                    <span>{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sub Total</span>
                    <span>₦{getTotalPrice().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Discount</span>
                    <span>₦0</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>₦{getTotalPrice().toLocaleString()}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleCheckout}>
                    Check out
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      {/* Payment Modal */}
      <PaymentModals
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        onComplete={handlePaymentComplete}
        totalAmount={getTotalPrice()}
      />

      {/* Newsletter Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Newsletter</h2>
          <div className="max-w-md mx-auto flex">
            <Input placeholder="Enter your email" className="rounded-r-none" />
            <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TRUCKR</h3>
              <p className="text-gray-400 mb-4">At TruckR, we're redefining how Nigeria moves, one truck at a time.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Our Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>Available Products</p>
                <p>Email</p>
                <p>Twitter</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Location</h4>
              <div className="space-y-2 text-gray-400">
                <p>Lagos State</p>
                <p>Abuja State</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Our Products</h4>
              <div className="space-y-2 text-gray-400">
                <p>Flatbed Truck</p>
                <p>Tanker Truck</p>
                <p>Trailer Truck</p>
                <p>Dump Truck</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>Copyright ©2025. All Rights Reserved — TruckR</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

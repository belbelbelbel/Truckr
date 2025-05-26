"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [accountType, setAccountType] = useState("")

  const handleAccountTypeSelect = (type: string) => {
    setAccountType(type)
    setStep(2)
  }

  if (step === 1) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 bg-white border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                TRUCKR
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/rent" className="text-gray-700 hover:text-blue-600">
                  Rent
                </Link>
                <Link href="/list" className="text-gray-700 hover:text-blue-600">
                  List
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600">
                  About us
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                  Contact Us
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <span className="mr-2">🛒</span>
              </Button>
              <Link href="/auth/login">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Account Type Selection */}
        <Card className="relative z-10 w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Account Type</CardTitle>
            <p className="text-gray-600">How would you like to use TruckR?</p>
            <p className="text-sm text-gray-500">
              You can create your company account after you create a personal account if you want a single truck rental.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div
              className="border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-blue-500 transition-colors"
              onClick={() => handleAccountTypeSelect("rent")}
            >
              <div className="text-center">
                <div className="text-4xl mb-2">🚛</div>
                <h3 className="font-semibold">Rent</h3>
                <p className="text-sm text-gray-600">I want to rent a truck</p>
              </div>
            </div>

            <div
              className="border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-blue-500 transition-colors"
              onClick={() => handleAccountTypeSelect("list")}
            >
              <div className="text-center">
                <div className="text-4xl mb-2">📋</div>
                <h3 className="font-semibold">List</h3>
                <p className="text-sm text-gray-600">I want to list my truck</p>
              </div>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700" disabled>
              Continue
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              TRUCKR
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/rent" className="text-gray-700 hover:text-blue-600">
                Rent
              </Link>
              <Link href="/list" className="text-gray-700 hover:text-blue-600">
                List
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">
                About us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <span className="mr-2">🛒</span>
            </Button>
            <Link href="/auth/login">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Registration Form */}
      <Card className="relative z-10 w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">
            {accountType === "business" ? "Business Account" : "Personal Account"}
          </CardTitle>
          <p className="text-gray-600">
            {accountType === "business" ? "Setup your business account" : "Setup your personal account"}
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {accountType === "business" ? (
            <>
              <div className="space-y-2">
                <Label htmlFor="businessName">Business Name</Label>
                <Input id="businessName" placeholder="Enter your business name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cac">CAC</Label>
                <Input id="cac" placeholder="Enter your CAC number" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Enter location" />
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="First Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Last Name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email address" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nin">National Identification Number (NIN)</Label>
                <Input id="nin" placeholder="Enter your NIN" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lagos">Lagos</SelectItem>
                    <SelectItem value="abuja">Abuja</SelectItem>
                    <SelectItem value="kano">Kano</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          <Button className="w-full bg-blue-600 hover:bg-blue-700">Continue</Button>

          <div className="text-center text-sm">
            <span className="text-gray-600">Don't have an Account? </span>
            <Link href="/auth/login" className="text-blue-600 hover:underline">
              Sign In
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

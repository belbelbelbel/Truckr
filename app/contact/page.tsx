"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ShoppingCart, Send } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/component/Footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [newsletterEmail, setNewsletterEmail] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription here
    console.log("Newsletter subscription:", newsletterEmail)
  }

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50" >
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
            <Link href="/list" className="text-gray-700 hover:text-blue-600 font-medium">
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
                <span className="text-white text-sm">D</span>
              </div>
              <div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center">
                <span className="text-xs">☰</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-64 flex items-center justify-center"
        style={{
          backgroundImage: `url('/assets/f54b64a9-5d1d-465d-94e5-33bc97549c39 1.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Want to send TruckR a Message?</h2>
            <p className="text-gray-600">Drop us a line and we'll get back to you within a business day.</p>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base font-medium text-gray-900">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="please enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2 h-14 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base font-medium text-gray-900">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="please enter your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2 h-14 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base font-medium text-gray-900">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="please enter phone no"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-2 h-14 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-base font-medium text-gray-900">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="write your message here..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-2 min-h-32 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                    required
                  />
                </div>

                <Button type="submit" className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-base font-semibold">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>


      {/* Footer */}
      <Footer />
    </div>
  )
}

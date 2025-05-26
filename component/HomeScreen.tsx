"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Star, MapPin, Search, Truck, Shield, Headphones, User, ShoppingCart, ArrowRight, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
  trucksData,
  truckCategories,
  locations,
  filterTrucks,
  defaultFilters,
  type FilterState,
} from "@/constant/truck-data"

const features = [
  {
    icon: <Search className="h-12 w-12 text-blue-600" />,
    title: "Browse Equipments",
    description:
      "Quality vetted and browse a wide selection of trucks and get referred to the specific job or transport needs.",
  },
  {
    icon: <Shield className="h-12 w-12 text-blue-600" />,
    title: "Secured Payment",
    description: "All payments are processed through encrypted and trusted channels.",
  },
  {
    icon: <User className="h-12 w-12 text-blue-600" />,
    title: "Driver",
    description: "Choose to rent truck with an experienced, vetted driver for added convenience and peace of mind.",
  },
  {
    icon: <MapPin className="h-12 w-12 text-blue-600" />,
    title: "Installed Tracker",
    description:
      "Each truck is equipped with a real-time GPS tracker, giving you full visibility of your vehicle's location.",
  },
  {
    icon: <Headphones className="h-12 w-12 text-blue-600" />,
    title: "24/7 Support",
    description:
      "Have a question or need help? Our dedicated support team is available 24/7 to assist with any issue, big or small.",
  },
  {
    icon: <Truck className="h-12 w-12 text-blue-600" />,
    title: "Latest Equipment",
    description: "Rent from a fleet of well-maintained trucks and up-to-date equipment to ensure smooth, safe.",
  },
]

const testimonials = [
  {
    name: "Adebayo Ogundimu",
    company: "Ogundimu Logistics",
    rating: 5,
    text: "I needed a reliable truck that rented for a big delivery in Lagos, and this platform came through perfectly. The booking was seamless, the truck was in excellent condition, and the driver was professional. I couldn't be happier with the service and will definitely be using them again for future deliveries. Highly recommend!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Adebayo Ogundimu",
    company: "Ogundimu Logistics",
    rating: 5,
    text: "I needed a reliable truck that rented for a big delivery in Lagos, and this platform came through perfectly. The booking was seamless, the truck was in excellent condition, and the driver was professional. I couldn't be happier with the service and will definitely be using them again for future deliveries. Highly recommend!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

const faqs = [
  {
    question: "How do I sign up account?",
    answer: "You can sign up by clicking the 'Sign Up' button and following the registration process.",
  },
  {
    question: "How do I register my Company?",
    answer: "During registration, select 'Business Account' and provide your company details including CAC number.",
  },
  {
    question: "How secure is TruckR?",
    answer: "TruckR uses industry-standard security measures to protect your data and transactions.",
  },
  {
    question: "Why can't I find trucks I want to deliver?",
    answer: "Try adjusting your search filters or contact our support team for assistance finding specific trucks.",
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach our 24/7 support team through the contact form or email us directly.",
  },
  {
    question: "Where are your branches located?",
    answer: "We currently operate in Lagos and Abuja, with plans to expand to other major cities.",
  },
]

export default function HomeScreen() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchLocation, setSearchLocation] = useState("")
  const [likedTrucks, setLikedTrucks] = useState<Set<string>>(new Set())
  const [priceRange, setPriceRange] = useState([0, 100000])

  const filteredTrucks = filterTrucks(trucksData, filters)

  const handleCategoryChange = (category: string) => {
    setFilters((prev) => ({ ...prev, category }))
  }

  const handleConditionChange = (condition: string) => {
    setFilters((prev) => ({ ...prev, condition }))
  }

  const handleLocationChange = (location: string) => {
    setFilters((prev) => ({ ...prev, location }))
  }

  const handlePriceChange = (values: number[]) => {
    setPriceRange(values)
    setFilters((prev) => ({ ...prev, minPrice: values[0], maxPrice: values[1] }))
  }

  const handleSearch = () => {
    setFilters((prev) => ({
      ...prev,
      searchQuery,
      location: searchLocation || "All",
    }))
  }

  const clearFilters = () => {
    setFilters(defaultFilters)
    setSearchQuery("")
    setSearchLocation("")
    setPriceRange([0, 100000])
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
    <div className="min-h-screen w-screen bg-white font-inter">
      {/* Header */}
      <header className="border-b bg-white text-black sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
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
      <section className="relative bg-gradient-to-r w-full text-white flex items-center h-[55rem] md:h-[36rem]"     style={{
            backgroundImage: `url('/assets/f54b64a9-5d1d-465d-94e5-33bc97549c39 1.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-blue-400">Fast, Reliable,</span> Right Around
            <br />
            <span className="text-blue-400">the Corner.</span>
          </h1>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-200">
            From excavators to dump trucks, find the equipment you need when you need it.
          </p>

          {/* Search Form */}
          <div className="bg-white rounded-lg p-6 max-w-4xl mx-auto shadow-2xl">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-left">
                <label className="block text-gray-700 text-sm font-medium mb-2">Truck Type</label>
                <Input
                  placeholder="What equipment do you need?"
                  className="w-full h-12 text-gray-900"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="text-left">
                <label className="block text-gray-700 text-sm font-medium mb-2">Location</label>
                <Select value={searchLocation} onValueChange={setSearchLocation}>
                  <SelectTrigger className="text-black w-full h-12">
                    <SelectValue placeholder="Where do you want to rent?" />
                  </SelectTrigger>
                  <SelectContent className="text-black">
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-lg font-semibold"
                  onClick={handleSearch}
                >
                  <Search className="mr-2 h-5 w-5" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="pt-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black mb-12">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {truckCategories.map((category) => (
              <Button
                key={category}
                variant={filters.category === category ? "default" : "outline"}
                className={`px-6 py-3 rounded-lg ${
                  filters.category === category ? "bg-blue-600 text-white" : "text-gray-700 border-gray-300"
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Trucks with Filters */}
      <section className="text-black py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Popular Trucks and Equipments</h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h3 className="font-bold text-lg mb-6 text-black">Filters</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-4 text-black">Categories</h4>
                    <div className="space-y-3">
                      {truckCategories.map((category) => (
                        <label key={category} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            checked={filters.category === category}
                            onChange={() => handleCategoryChange(category)}
                          />
                          <span className="text-sm text-gray-700">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-black">Price Range</h4>
                    <div className="space-y-4">
                      <div className="px-2">
                        <Slider
                          value={priceRange}
                          onValueChange={handlePriceChange}
                          max={100000}
                          min={0}
                          step={1000}
                          className="w-full"
                        />
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>₦{priceRange[0].toLocaleString()}</span>
                        <span>₦{priceRange[1].toLocaleString()}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          placeholder="Min"
                          type="number"
                          value={priceRange[0]}
                          onChange={(e) => handlePriceChange([Number(e.target.value), priceRange[1]])}
                          className="text-sm"
                        />
                        <Input
                          placeholder="Max"
                          type="number"
                          value={priceRange[1]}
                          onChange={(e) => handlePriceChange([priceRange[0], Number(e.target.value)])}
                          className="text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={clearFilters}>
                    Apply Filters
                  </Button>
                </div>
              </Card>
            </div>

            {/* Trucks Grid */}
            <div className="lg:col-span-3">
              {filteredTrucks.length === 0 ? (
                <Card className="text-center py-12">
                  <CardContent>
                    <div className="text-6xl mb-4">🚛</div>
                    <h3 className="text-xl font-semibold mb-2">No trucks found</h3>
                    <p className="text-gray-600 mb-6">Try adjusting your filters or search criteria.</p>
                    <Button onClick={clearFilters} className="bg-blue-600 hover:bg-blue-700">
                      Clear Filters
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredTrucks.map((truck) => (
                    <Card key={truck.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <Image
                          src={truck.images[0] || "/placeholder.svg"}
                          alt={truck.name}
                          width={300}
                          height={200}
                          className="w-full h-48 object-contain"
                        />
                        <Badge className="absolute top-3 left-3 bg-blue-600 text-white rounded px-3 py-2">{truck.category}</Badge>
                        <Button
                          variant="ghost"
                          size="lg"
                          className={`absolute top-3 r right-3 hover:bg-black/60  ${
                            likedTrucks.has(truck.id) ? "bg-black text-blue-600" : "bg-black/80 text-white"
                          }`}
                          onClick={() => toggleLike(truck.id)}
                        >
                          <Heart  size={30}
                            className={` ${likedTrucks.has(truck.id) ? "fill-white text-white" : ""}`}
                          />
                        </Button>
                      </div>
                     <CardContent className="p-4 fllex items-center">

                        <div className="flex items-center text-gray-600 justify-between mb-2">
                          <div className="flex flex-col">
                            <h3 className="font-semibold mb-2">{truck.name}</h3>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span className="text-sm">{truck.location}</span>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm ml-1">
                              {truck.rating} ({truck.reviews})
                            </span>
                          </div>
                        </div>


                        <div className="flex items-center relative top-10 justify-between mb-4">
                          <div className="flex items-center">
                            <p className="font-bold text-lg">₦{truck.price.toLocaleString()}</p>
                            <p className="text-sm text-gray-600">/day</p>
                          </div>

                          <Link href={`/trucks/${truck.id}`}>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700">Rent this Truck 
                              <div>
                                <ArrowRight />
                              </div>
                            </Button>
                          </Link>
                        </div>

                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose TruckR */}
      <section className="py-16 text-black bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose TruckR?</h2>
          <p className="text-center text-gray-600 mb-12">
            Simple and fast. Rent a truck or list your truck in seconds.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Rent A Truck
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              List A Truck
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">What our customers are saying</h2>
          <p className="text-center text-gray-600 mb-12">
            Hear from TruckR owners and renters who have successfully used TruckR
          </p>

          <div className="grid md:grid-cols-2 text-black gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 text-black bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">FAQs</h2>
              <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
              <p className="text-gray-600 mb-6">Ask us any Questions</p>
              <div className="space-y-2">
                <p className="font-medium">hello@gmail.com</p>
                <p className="text-sm text-gray-600">We're here to help</p>
              </div>
            </div>

            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                    <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 text-black relative overflow-hidden rounded-lg w-[96%] mx-auto"     style={{
            backgroundImage: `url('/assets/f54b64a9-5d1d-465d-94e5-33bc97549c39 1.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Can't find what you are looking for?</h2>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Send us a message
          </Button>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 text-black bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Subscribe to Newsletter</h3>
            <div className="flex">
              <Input placeholder="Enter your email" className="rounded-r-none" />
              <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TRUCKR</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                At TruckR, we're redefining how Nigeria moves, one truck at a time. Whether you're delivering goods, or
                managing logistics for your business, we connect you to a network of trusted drivers and reliable
                vehicles across your needs.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-sm">in</span>
                </div>
              </div>
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

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart, Upload, Calendar } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { addUserListing } from "@/constant/user-listings"
import Footer from "@/component/Footer"
import Navbar from "@/component/Navbar"

export default function NewListingPage() {
    const router = useRouter()
    const [showConditionDropdown, setShowConditionDropdown] = useState(false)
    const [formData, setFormData] = useState({
        truckType: "",
        dailyRate: "",
        availabilityPeriod: "",
        manufacturerNumber: "",
        transmission: "",
        fuelCapacity: "",
        serialNumber: "",
        truckCondition: "",
        description: "",
        photos: [] as File[],
        ownershipProof: [] as File[],
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const newListing = addUserListing({
            name: `${formData.truckType}`,
            image: formData.photos.length > 0 ? URL.createObjectURL(formData.photos[0]) : "/placeholder.svg",
            condition: formData.truckCondition,
            amount: Number.parseInt(formData.dailyRate.replace(/[^0-9]/g, "")) || 0,
            location: "Lagos, Nigeria", // Default location
            truckType: formData.truckType,
            dailyRate: formData.dailyRate,
            availabilityPeriod: formData.availabilityPeriod,
            manufacturerNumber: formData.manufacturerNumber,
            transmission: formData.transmission,
            fuelCapacity: formData.fuelCapacity,
            serialNumber: formData.serialNumber,
            description: formData.description,
            photos: formData.photos.map((file) => URL.createObjectURL(file)),
            ownershipProof: formData.ownershipProof.map((file) => URL.createObjectURL(file)),
        })
        router.push("/list")
    }

    const handleFileUpload = (field: "photos" | "ownershipProof", files: FileList | null) => {
        if (files) {
            setFormData((prev) => ({
                ...prev,
                [field]: Array.from(files),
            }))
        }
    }

    const conditionOptions = [
        "Excellent Condition",
        "Very Good Condition",
        "Good Condition",
        "Bad Condition",
        "Terrible Condition",
    ]

    return (
        <div className="min-h-screen bg-white font-inter">
            {/* Header */}
            <Navbar />

            <section
                className="relative bg-gray-800 text-white py-16"
                style={{
                    backgroundImage: `url('/assets/f54b64a9-5d1d-465d-94e5-33bc97549c39 1.svg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="relative container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold mb-4">List Your Truck</h1>
                    <p className="text-lg text-gray-200">Complete the form below to list your truck for sale on TruckR</p>
                </div>
            </section>

            <div className="container mx-auto px-6 py-12">
                <div className="max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-3 gap-6">
                            <div>
                                <Label className="text-lg font-semibold text-gray-900 mb-3 block">Truck Type</Label>
                                <Select
                                    value={formData.truckType}
                                    onValueChange={(value) => setFormData((prev) => ({ ...prev, truckType: value }))}
                                >
                                    <SelectTrigger className="h-12 border-gray-300">
                                        <SelectValue placeholder="Select Truck Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Dump Truck">Dump Truck</SelectItem>
                                        <SelectItem value="Flatbed Truck">Flatbed Truck</SelectItem>
                                        <SelectItem value="Tanker Truck">Tanker Truck</SelectItem>
                                        <SelectItem value="Forklift">Forklift</SelectItem>
                                        <SelectItem value="Excavator">Excavator</SelectItem>
                                        <SelectItem value="Loader">Loader</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <Label className="text-lg font-semibold text-gray-900 mb-3 block">Daily Rate (₦)</Label>
                                <Input
                                    placeholder="e.g 20,000 per day"
                                    className="h-12 border-gray-300"
                                    value={formData.dailyRate}
                                    onChange={(e) => setFormData((prev) => ({ ...prev, dailyRate: e.target.value }))}
                                />
                            </div>

                            <div>
                                <Label className="text-lg font-semibold text-gray-900 mb-3 block">Availability Period</Label>
                                <div className="relative">
                                    <Input
                                        placeholder="DD/MM/YYYY"
                                        className="h-12 border-gray-300 pr-10"
                                        value={formData.availabilityPeriod}
                                        onChange={(e) => setFormData((prev) => ({ ...prev, availabilityPeriod: e.target.value }))}
                                    />
                                    <Calendar className="absolute right-3 top-3 h-6 w-6 text-gray-400" />
                                </div>
                            </div>
                        </div>

                        {/* Manufacturer Number */}
                        <div>
                            <Label className="text-lg font-semibold text-gray-900 mb-3 block">Manufacturer Number</Label>
                            <Input
                                placeholder="Input manufacturer number"
                                className="h-14 border-gray-300 text-base"
                                value={formData.manufacturerNumber}
                                onChange={(e) => setFormData((prev) => ({ ...prev, manufacturerNumber: e.target.value }))}
                            />
                        </div>

                        {/* Transmission */}
                        <div>
                            <Label className="text-lg font-semibold text-gray-900 mb-3 block">Transmission</Label>
                            <Select
                                value={formData.transmission}
                                onValueChange={(value) => setFormData((prev) => ({ ...prev, transmission: value }))}
                            >
                                <SelectTrigger className="h-14 border-gray-300 text-base">
                                    <SelectValue placeholder="Select transmission Type e.g Manual, automatic" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="manual">Manual</SelectItem>
                                    <SelectItem value="automatic">Automatic</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Fuel Capacity */}
                        <div>
                            <Label className="text-lg font-semibold text-gray-900 mb-3 block">Fuel Capacity</Label>
                            <Input
                                placeholder="Input fuel capacity"
                                className="h-14 border-gray-300 text-base"
                                value={formData.fuelCapacity}
                                onChange={(e) => setFormData((prev) => ({ ...prev, fuelCapacity: e.target.value }))}
                            />
                        </div>

                        {/* Serial Number */}
                        <div>
                            <Label className="text-lg font-semibold text-gray-900 mb-3 block">Serial Number</Label>
                            <Input
                                placeholder="Input serial number"
                                className="h-14 border-gray-300 text-base"
                                value={formData.serialNumber}
                                onChange={(e) => setFormData((prev) => ({ ...prev, serialNumber: e.target.value }))}
                            />
                        </div>

                        {/* Truck Condition with Custom Dropdown */}
                        <div className="relative">
                            <Label className="text-lg font-semibold text-gray-900 mb-3 block">Truck Condition</Label>
                            <div className="relative">
                                <button
                                    type="button"
                                    className="w-full h-14 px-4 border border-gray-300 rounded-md text-left bg-white flex items-center justify-between text-base"
                                    onClick={() => setShowConditionDropdown(!showConditionDropdown)}
                                >
                                    <span className={formData.truckCondition ? "text-gray-900" : "text-gray-500"}>
                                        {formData.truckCondition || "Select Truck Condition"}
                                    </span>
                                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Custom Condition Dropdown - Positioned on the right */}
                                {showConditionDropdown && (
                                    <div className="absolute right-0 top-16 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                                        {conditionOptions.map((condition) => (
                                            <button
                                                key={condition}
                                                type="button"
                                                className="w-full px-4 py-3 text-left hover:bg-gray-50 text-gray-900 border-b border-gray-100 last:border-b-0"
                                                onClick={() => {
                                                    setFormData((prev) => ({ ...prev, truckCondition: condition }))
                                                    setShowConditionDropdown(false)
                                                }}
                                            >
                                                {condition}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Truck Description */}
                        <div>
                            <Label className="text-lg font-semibold text-gray-900 mb-3 block">Truck Description</Label>
                            <Textarea
                                placeholder="Describe your truck, its features and Capabilities..."
                                className="min-h-[120px] resize-none border-gray-300 text-base"
                                value={formData.description}
                                onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                            />
                        </div>

                        {/* Upload Truck Photos */}
                        <div>
                            <Label className="text-lg font-semibold text-gray-900 mb-3 block">Upload Truck Photos</Label>
                            <div className="border-2 flex items-center flex-col border-dashed border-gray-300 rounded-lg p-12 text-center bg-gray-50">
                                <div className="flex flex-col items-center">
                                    <Upload className="h-16 w-16 text-gray-400 mb-4" />
                                    <p className="text-gray-600 mb-2 text-base">Upload files or drag and drop</p>
                                    <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10mb</p>
                                </div>
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    className=""
                                    id="photos"
                                    onChange={(e) => handleFileUpload("photos", e.target.files)}
                                />
                                <Label htmlFor="photos" className="cursor-pointer">
                                  
                                </Label>
                            </div>
                        </div>

                        {/* Upload Proof Of Ownership */}
                        <div>
                            <Label className="text-lg font-semibold text-gray-900 mb-3 block">Upload Proof Of Ownership</Label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center bg-gray-50">
                                <div className="flex flex-col items-center">
                                    <Upload className="h-16 w-16 text-gray-400 mb-4" />
                                    <p className="text-gray-600 mb-2 text-base">Upload files or drag and drop</p>
                                    <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10mb</p>
                                </div>
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    className=""
                                    id="ownership"
                                    onChange={(e) => handleFileUpload("ownershipProof", e.target.files)}
                                />
                                {/* <Label htmlFor="ownership" className="cursor-pointer">
                                    <Button type="button" variant="outline" className="mt-4">
                                        Choose Files
                                    </Button>
                                </Label> */}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <Button
                                type="submit"
                                className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-lg font-semibold rounded-lg"
                            >
                                Submit Listing
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
            {showConditionDropdown && <div className="fixed inset-0 z-10" onClick={() => setShowConditionDropdown(false)} />}
        </div>
    )
}

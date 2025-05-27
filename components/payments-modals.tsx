"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Upload, Check, Copy, CreditCard, Building2 } from "lucide-react"

interface PaymentModalsProps {
  isOpen: boolean
  onClose: () => void
  onComplete: () => void
  totalAmount: number
}

export function PaymentModals({ isOpen, onClose, onComplete, totalAmount }: PaymentModalsProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState<"crypto" | "local">("local")
  const [formData, setFormData] = useState({
    surname: "",
    firstName: "",
    location: "",
    address: "",
    city: "",
    documentType: "",
    uploadedFile: null as File | null,
  })

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleComplete = () => {
    onComplete()
    onClose()
    setCurrentStep(1)
  }

  const resetModal = () => {
    setCurrentStep(1)
    setFormData({
      surname: "",
      firstName: "",
      location: "",
      address: "",
      city: "",
      documentType: "",
      uploadedFile: null,
    })
  }

  const handleClose = () => {
    onClose()
    resetModal()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md p-0 overflow-hidden">
        {/* Step 1: Confirm Details */}
        {currentStep === 1 && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Payment</h2>
              <Button variant="ghost" size="sm" onClick={handleClose}>
                {/* <X className="h-4 w-4" /> */}
              </Button>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Confirm your Details</h3>
              <p className="text-sm text-gray-600 mb-4">
                Please fill in your details & confirm your identity to unlock additional services. All information is
                private & secure.
              </p>

              {/* Progress bar */}
              <div className="flex space-x-2 mb-6">
                <div className="flex-1 h-1 bg-green-500 rounded"></div>
                <div className="flex-1 h-1 bg-gray-200 rounded"></div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Surname</label>
                  <Input
                    value={formData.surname}
                    onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                    placeholder="Enter surname"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">First Name</label>
                  <Input
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="Enter first name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Location</label>
                <Input
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Enter location"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Address</label>
                <Input
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Enter address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <Input
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="Enter city"
                />
              </div>
            </div>

            <Button
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700"
              onClick={handleNext}
              disabled={!formData.surname || !formData.firstName || !formData.location}
            >
              Save and Continue
            </Button>
          </div>
        )}

        {/* Step 2: Upload Identification */}
        {currentStep === 2 && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Payment</h2>
              <Button variant="ghost" size="sm" onClick={handleClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Upload Identification</h3>
              <p className="text-sm text-gray-600 mb-4">
                Please upload your identification. This step will unlock more capabilities limits and enhanced account
                security.
              </p>

              {/* Progress bar */}
              <div className="flex space-x-2 mb-6">
                <div className="flex-1 h-1 bg-green-500 rounded"></div>
                <div className="flex-1 h-1 bg-green-500 rounded"></div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Document Type</label>
                <Select
                  value={formData.documentType}
                  onValueChange={(value) => setFormData({ ...formData, documentType: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select document Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nin">National ID (NIN)</SelectItem>
                    <SelectItem value="passport">International Passport</SelectItem>
                    <SelectItem value="drivers">Driver's License</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Upload</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-600 mb-1">Upload files or drag and drop</p>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10mb</p>
                  <input
                    type="file"
                    className="hidden"
                    accept=".png,.jpg,.jpeg,.gif,.pdf"
                    onChange={(e) => setFormData({ ...formData, uploadedFile: e.target.files?.[0] || null })}
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Button variant="outline" className="mt-2" asChild>
                      <span>Choose File</span>
                    </Button>
                  </label>
                </div>
                <div className="mt-2 p-2 bg-blue-50 rounded text-xs text-blue-700">
                  Following file types are accepted: .png, .jpg, .pdf
                </div>
              </div>
            </div>

            <Button
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700"
              onClick={handleNext}
              disabled={!formData.documentType}
            >
              Save and Continue
            </Button>
          </div>
        )}

        {/* Step 3: Verification Complete */}
        {currentStep === 3 && (
          <div className="p-6 text-center">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Payment</h2>
              <Button variant="ghost" size="sm" onClick={handleClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-white" />
            </div>

            <h3 className="text-xl font-bold mb-2">Verification Complete</h3>
            <p className="text-gray-600 mb-8">Proceed to Payment</p>

            <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleNext}>
              Proceed
            </Button>
          </div>
        )}

        {/* Step 4: Payment Method Selection */}
        {currentStep === 4 && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-lg">💳</span>
                <h2 className="text-xl font-bold">Wallet</h2>
              </div>
              <Button variant="ghost" size="sm" onClick={handleClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Payment Method Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
              <button
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  paymentMethod === "crypto" ? "bg-white shadow-sm" : "text-gray-600"
                }`}
                onClick={() => setPaymentMethod("crypto")}
              >
                Crypto
              </button>
              <button
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  paymentMethod === "local" ? "bg-blue-600 text-white shadow-sm" : "text-gray-600"
                }`}
                onClick={() => setPaymentMethod("local")}
              >
                Local Currency
              </button>
            </div>

            {paymentMethod === "crypto" ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Currency</label>
                  <Select defaultValue="btc">
                    <SelectTrigger>
                      <SelectValue placeholder="Select currency Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="btc">Bitcoin (BTC)</SelectItem>
                      <SelectItem value="eth">Ethereum (ETH)</SelectItem>
                      <SelectItem value="usdt">Tether (USDT)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Wallet Address</label>
                  <div className="flex items-center space-x-2">
                    <Input value="asdshbgftkbjkdnlnbj" readOnly className="flex-1" />
                    <Button variant="outline" size="sm">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="text-center py-4">
                  <p className="text-lg font-semibold">Amount: ₦{totalAmount.toLocaleString()}</p>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <Building2 className="h-5 w-5 text-gray-600" />
                    <span className="font-medium">Bank Transfer</span>
                  </div>
                  <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="h-5 w-5 text-gray-600" />
                    <span className="font-medium">Pay With Card</span>
                  </div>
                  <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">O</span>
                    </div>
                    <span className="font-medium">Opay</span>
                  </div>
                  <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                </div>

                <div className="text-center py-4">
                  <p className="text-lg font-semibold">Amount: ₦{totalAmount.toLocaleString()}</p>
                </div>
              </div>
            )}

            <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700" onClick={handleComplete}>
              Complete Payment
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

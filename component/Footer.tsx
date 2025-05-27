import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <div>
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
            <footer className="bg-gray-900 text-white py-12">
                <div className="container relative mx-auto px-4">
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
                    <div className="hidden absolute right-20 bottom-10 lg:block">
                        <Image
                            src='/assets/footerlogo.png'
                            alt="Truck illustration"
                            width={150}
                            height={100}
                            className="object-contain"
                        />
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>Copyright ©2025. All Rights Reserved — TruckR</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

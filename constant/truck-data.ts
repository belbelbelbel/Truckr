export interface Truck {
  id: string
  name: string
  category: string
  condition: "New" | "Used" | "Refurbished"
  price: number
  location: string
  rating: number
  reviews: number
  images: string[]
  verified: boolean
  available: boolean
  owner: {
    name: string
    rating: number
    verified: boolean
    avatar: string
  }
  specifications: {
    year: number
    weight: string
    fuelType: string
    fuelCapacity: string
    transmission: string
    engine: string
  }
  features: string[]
  description: string
  pickupLocations: string[]
  minimumRental: number // in days
}

export const truckCategories = [
  "All",
  "Load Truck",
  "Flatbed Truck",
  "Tanker Truck",
  "Trailer Truck",
  "Tipper Truck",
  "Dump Truck",
  "Forklifts",
  "Loaders",
  "Excavators",
]

export const conditions = ["All", "New", "Used", "Refurbished"]

export const locations = [
  "Ikeja, Lagos",
  "Victoria Island, Lagos",
  "Surulere, Lagos",
  "Lekki, Lagos",
  "Yaba, Lagos",
  "Abuja, FCT",
  "Kano, Kano",
  "Port Harcourt, Rivers",
  "Ibadan, Oyo",
]

export const trucksData: Truck[] = [
  {
    id: "1",
    name: "Hino Dump Truck",
    category: "Dump Truck",
    condition: "Used",
    price: 25000,
    location: "Ikeja, Lagos",
    rating: 4.5,
    reviews: 12,
    images: [
      "/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png",
      "/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png0",
      "/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png",
    ],
    verified: true,
    available: true,
    owner: {
      name: "Adebayo O.",
      rating: 4.8,
      verified: true,
      avatar: "/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png",
    },
    specifications: {
      year: 2018,
      weight: "15 Tons",
      fuelType: "Diesel",
      fuelCapacity: "200L",
      transmission: "Manual",
      engine: "Hino J08E-VD",
    },
    features: ["Bluetooth", "Air Condition", "Extra Tires", "GPS Tracker"],
    description:
      "Well-maintained Hino dump truck perfect for construction and material transport. Regular maintenance and excellent condition.",
    pickupLocations: ["Ikeja", "Victoria Island", "Surulere"],
    minimumRental: 1,
  },
  {
    id: "2",
    name: "Hino Forklift 2B",
    category: "Forklifts",
    condition: "New",
    price: 15000,
    location: "Victoria Island, Lagos",
    rating: 4.8,
    reviews: 8,
    images: ["/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png", "/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png"],
    verified: true,
    available: true,
    owner: {
      name: "Demilore O.",
      rating: 4.9,
      verified: true,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    specifications: {
      year: 2023,
      weight: "2.5 Tons",
      fuelType: "Electric",
      fuelCapacity: "Battery",
      transmission: "Automatic",
      engine: "Electric Motor",
    },
    features: ["Side Shift", "LED Lights", "Ergonomic Design", "Safety Sensors"],
    description:
      "Brand new electric forklift with advanced safety features. Perfect for warehouse operations and material handling.",
    pickupLocations: ["Victoria Island", "Lekki", "Ikeja"],
    minimumRental: 1,
  },
  {
    id: "3",
    name: "Mercedes Flatbed Truck",
    category: "Flatbed Truck",
    condition: "Used",
    price: 35000,
    location: "Lekki, Lagos",
    rating: 4.3,
    reviews: 15,
    images: [
      "/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png",
      "/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png",
      "/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png",
    ],
    verified: true,
    available: true,
    owner: {
      name: "Ibrahim K.",
      rating: 4.6,
      verified: true,
      avatar: "/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png",
    },
    specifications: {
      year: 2019,
      weight: "20 Tons",
      fuelType: "Diesel",
      fuelCapacity: "300L",
      transmission: "Manual",
      engine: "Mercedes OM936",
    },
    features: ["Hydraulic Crane", "Tie-Down Points", "Extended Bed", "GPS Tracker"],
    description: "Reliable Mercedes flatbed truck ideal for transporting heavy machinery and construction materials.",
    pickupLocations: ["Lekki", "Victoria Island", "Ajah"],
    minimumRental: 1,
  },
  {
    id: "4",
    name: "Volvo Tanker Truck",
    category: "Tanker Truck",
    condition: "Refurbished",
    price: 45000,
    location: "Abuja, FCT",
    rating: 4.7,
    reviews: 9,
    images: ["/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png", "/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png"],
    verified: true,
    available: true,
    owner: {
      name: "Fatima A.",
      rating: 4.7,
      verified: true,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    specifications: {
      year: 2017,
      weight: "25 Tons",
      fuelType: "Diesel",
      fuelCapacity: "400L",
      transmission: "Automatic",
      engine: "Volvo D13K",
    },
    features: ["Stainless Steel Tank", "Safety Valves", "Temperature Control", "GPS Tracker"],
    description: "Recently refurbished Volvo tanker truck suitable for liquid transport. Meets all safety standards.",
    pickupLocations: ["Abuja", "Gwagwalada", "Kubwa"],
    minimumRental: 2,
  },
  {
    id: "5",
    name: "CAT Wheel Loader",
    category: "Loaders",
    condition: "Used",
    price: 40000,
    location: "Port Harcourt, Rivers",
    rating: 4.4,
    reviews: 6,
    images: [
      "/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png",
      "/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png",
      "/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png",
    ],
    verified: true,
    available: true,
    owner: {
      name: "Chidi N.",
      rating: 4.5,
      verified: true,
      avatar: "/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png0",
    },
    specifications: {
      year: 2020,
      weight: "18 Tons",
      fuelType: "Diesel",
      fuelCapacity: "250L",
      transmission: "Automatic",
      engine: "CAT C7.1",
    },
    features: ["Quick Coupler", "Joystick Controls", "AC Cabin", "LED Work Lights"],
    description: "Powerful CAT wheel loader perfect for construction sites and material handling operations.",
    pickupLocations: ["Port Harcourt", "Aba", "Owerri"],
    minimumRental: 1,
  },
  {
    id: "6",
    name: "Mack Trailer Truck",
    category: "Trailer Truck",
    condition: "New",
    price: 55000,
    location: "Kano, Kano",
    rating: 4.9,
    reviews: 4,
    images: ["/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png", "/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png"],
    verified: true,
    available: true,
    owner: {
      name: "Musa S.",
      rating: 4.8,
      verified: true,
      avatar: "/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png",
    },
    specifications: {
      year: 2024,
      weight: "40 Tons",
      fuelType: "Diesel",
      fuelCapacity: "500L",
      transmission: "Automatic",
      engine: "Mack MP8",
    },
    features: ["Air Suspension", "Sleeper Cab", "Advanced Safety", "Fuel Efficient"],
    description: "Brand new Mack trailer truck with latest technology. Perfect for long-distance hauling.",
    pickupLocations: ["Kano", "Kaduna", "Zaria"],
    minimumRental: 3,
  },
  {
    id: "7",
    name: "Isuzu Tipper Truck",
    category: "Tipper Truck",
    condition: "Used",
    price: 30000,
    location: "Ibadan, Oyo",
    rating: 4.2,
    reviews: 11,
    images: [
      "/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png",
      "/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png",
      "/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png",
    ],
    verified: true,
    available: true,
    owner: {
      name: "Olumide T.",
      rating: 4.3,
      verified: true,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    specifications: {
      year: 2019,
      weight: "12 Tons",
      fuelType: "Diesel",
      fuelCapacity: "180L",
      transmission: "Manual",
      engine: "Isuzu 4HK1",
    },
    features: ["Hydraulic Tipper", "Reinforced Body", "Side Guards", "GPS Tracker"],
    description: "Reliable Isuzu tipper truck ideal for sand, gravel, and construction material transport.",
    pickupLocations: ["Ibadan", "Abeokuta", "Ilorin"],
    minimumRental: 1,
  },
  {
    id: "8",
    name: "JCB Excavator",
    category: "Excavators",
    condition: "Refurbished",
    price: 60000,
    location: "Surulere, Lagos",
    rating: 4.6,
    reviews: 7,
    images: ["/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png", "/assets/Forklift Truck - New & Used Forklift Truck for sale Australia 1.png"],
    verified: true,
    available: true,
    owner: {
      name: "Emeka O.",
      rating: 4.7,
      verified: true,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    specifications: {
      year: 2018,
      weight: "22 Tons",
      fuelType: "Diesel",
      fuelCapacity: "320L",
      transmission: "Hydraulic",
      engine: "JCB DieselMax",
    },
    features: ["360° Rotation", "Quick Hitch", "AC Cabin", "Hydraulic Hammer"],
    description: "Professional JCB excavator perfect for construction, demolition, and earthmoving projects.",
    pickupLocations: ["Surulere", "Ikeja", "Yaba"],
    minimumRental: 2,
  },
]

export interface FilterState {
  category: string
  condition: string
  location: string
  minPrice: number
  maxPrice: number
  searchQuery: string
}

export const defaultFilters: FilterState = {
  category: "All",
  condition: "All",
  location: "All",
  minPrice: 0,
  maxPrice: 100000,
  searchQuery: "",
}

export function filterTrucks(trucks: Truck[], filters: FilterState): Truck[] {
  return trucks.filter((truck) => {
    // Category filter
    if (filters.category !== "All" && truck.category !== filters.category) {
      return false
    }

    // Condition filter
    if (filters.condition !== "All" && truck.condition !== filters.condition) {
      return false
    }

    // Location filter
    if (filters.location !== "All" && !truck.location.includes(filters.location)) {
      return false
    }

    // Price filter
    if (truck.price < filters.minPrice || truck.price > filters.maxPrice) {
      return false
    }

    // Search query filter
    if (filters.searchQuery && !truck.name.toLowerCase().includes(filters.searchQuery.toLowerCase())) {
      return false
    }

    return true
  })
}

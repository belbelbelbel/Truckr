export interface UserListing {
  id: string
  name: string
  image: string
  condition: string
  amount: number
  status: "Approved" | "Failed" | "In Progress"
  listedDate: string
  location: string
  truckType: string
  dailyRate: string
  availabilityPeriod: string
  manufacturerNumber: string
  transmission: string
  fuelCapacity: string
  serialNumber: string
  description: string
  photos: string[]
  ownershipProof: string[]
}

// This will store user submitted listings
let userListings: UserListing[] = []

export const getUserListings = (): UserListing[] => {
  return userListings
}

export const addUserListing = (listing: Omit<UserListing, "id" | "status" | "listedDate">): UserListing => {
  const newListing: UserListing = {
    ...listing,
    id: Date.now().toString(),
    status: "In Progress", // New listings start as "In Progress"
    listedDate: new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
  }
  userListings.push(newListing)
  return newListing
}

export const deleteUserListing = (id: string): void => {
  userListings = userListings.filter((listing) => listing.id !== id)
}

export const updateUserListing = (id: string, updates: Partial<UserListing>): UserListing | null => {
  const index = userListings.findIndex((listing) => listing.id === id)
  if (index !== -1) {
    userListings[index] = { ...userListings[index], ...updates }
    return userListings[index]
  }
  return null
}

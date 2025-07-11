import Navbar from "@/component/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-200 font-inter" style={{
      backgroundImage: `url('/assets/f54b64a9-5d1d-465d-94e5-33bc97549c39 1.svg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div className="absolute inset-0 bg-black/70"></div>
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]  p-6">
        <div
          className="w-full max-w-full h-[800px] relative rounded-lg overflow-hidden"

        >


          {/* Login Modal */}
          <div className="absolute inset-0  flex items-center justify-center">
            <Card className="w-[620px] bg-white shadow-2xl">
              <CardHeader className="text-center pb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Login or Register <span className="text-blue-600">on TruckR</span>
                </h2>
                {/* <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900">Welcome Back!</h3>
                  <p className="text-sm text-gray-600 mt-1">Login your account to continue on TruckR</p>
                </div> */}
              </CardHeader>

              <CardContent className="space-y-6 px-8 pb-8">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-900">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="h-14 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-900">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="h-14 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="text-right">
                  <Link href="/auth/forgot-password" className="text-sm text-blue-600 hover:underline">
                    Forgot Password?
                  </Link>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-4 text-gray-500">Or login with</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full h-14 text-base border-gray-300 hover:bg-gray-50"
                    type="button"
                  >
                    <svg className="mr-3 h-15 w-15" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full h-14 text-base border-gray-300 hover:bg-gray-50"
                    type="button"
                  >
                    <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                      />
                    </svg>
                    Apple
                  </Button>
                </div>

                <Button className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-base font-semibold">Login</Button>

                <div className="text-center text-sm">
                  <span className="text-gray-600">Don't have an Account? </span>
                  <Link href="/auth/register" className="text-blue-600 hover:underline font-medium">
                    Sign Up
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

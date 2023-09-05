import './globals.css'
import {Metadata} from "next";
import {NavBar} from "@/components";



export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover the best cars in the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
      <NavBar />
      {children}
      </body>
    </html>
  )
}

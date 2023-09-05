import './globals.css'
import {Metadata} from "next";


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
      {children}
      </body>
    </html>
  )
}

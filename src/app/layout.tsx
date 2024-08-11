import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/context/theme-provider"
import { ApplicationProvider } from "@/context/application-provider"
import "./globals.css"

const jetBrains = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Popcorn App",
  description: "app for watch the best films",
}

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={jetBrains.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <ApplicationProvider>
            {children}
          </ApplicationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

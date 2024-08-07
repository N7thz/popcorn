import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/context/theme-provider"
import { ApplicationProvider } from "@/context/application-provider"
import { Header } from "@/components/header"
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
            <Header />
            {children}
          </ApplicationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

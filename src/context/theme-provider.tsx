"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { SessionProvider } from "next-auth/react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {

    const queryClient = new QueryClient()

    return (
        <NextThemesProvider {...props}>
            <QueryClientProvider
                client={queryClient}
            >
                <SessionProvider>
                    {children}
                </SessionProvider>
            </QueryClientProvider>
        </NextThemesProvider>
    )
}

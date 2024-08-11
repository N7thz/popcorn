import { Header } from "@/components/header"
import { ReactNode } from "react"

export default function HeaderLayout({ children }: {
    children: ReactNode
}) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

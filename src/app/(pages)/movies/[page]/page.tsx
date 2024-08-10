import { Main } from "@/components/main"
import { PaginationComponent } from "@/components/pagination"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Popcorn App | Movies"
}

export default function Page() {
    return (
        <div
            className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center"
        >
            <Main />
            <PaginationComponent className="mb-6" />
        </div>
    )
}

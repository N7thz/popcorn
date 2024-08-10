"use client"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useParams, useRouter } from "next/navigation"
import { ComponentProps } from "react"

export const PaginationComponent = ({ className }: ComponentProps<"div">) => {

    const { push } = useRouter()

    const { page } = useParams<{ page: string }>()

    const pageNumber = Number(page)

    function paginationPrevious() {

        if (pageNumber < 1) return

        push(`/movies/${pageNumber - 1}`)
    }

    function paginationNext() {
        push(`/movies/${pageNumber + 1}`)
    }

    return (
        <Pagination className={className}>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        disabled={pageNumber < 2}
                        onClick={paginationPrevious}
                    />
                </PaginationItem>
                {
                    pageNumber >= 2 &&
                    <PaginationItem>
                        <PaginationLink
                            onClick={
                                () => push(`/movies/${pageNumber - 1}`)
                            }
                        >
                            {pageNumber - 1}
                        </PaginationLink>
                    </PaginationItem>
                }
                <PaginationItem>
                    <PaginationLink isActive>
                        {page}
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        onClick={() => push(`/movies/${pageNumber + 1}`)}
                    >
                        {pageNumber + 1}
                    </PaginationLink>
                </PaginationItem>
                {
                    pageNumber === 1 &&
                    <PaginationItem>
                        <PaginationLink
                            onClick={() => push(`/movies/${pageNumber + 2}`)}
                        >
                            {pageNumber + 2}
                        </PaginationLink>
                    </PaginationItem>
                }
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext onClick={paginationNext} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}

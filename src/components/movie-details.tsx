"use client"

import { getMovieById } from "@/hooks/use-service"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"

export const MovieDetails = () => {

    const { id } = useParams<{ id: string }>()

    const { data: result } = useQuery({
        queryKey: ['get-movie-by-id'],
        queryFn: async () => getMovieById(id)
    })

    console.log(result)

    return (
        <pre>
            {JSON.stringify(result, null, 2)}
        </pre>
    )
}

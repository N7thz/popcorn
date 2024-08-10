"use client"

import { getMovies } from "@/hooks/use-service"
import { useQuery } from "@tanstack/react-query"
import { PaginationComponent } from "./pagination"
import { CardMovie } from "./card-movie"
import { Animation } from "./animation"
import { useParams } from "next/navigation"
import { LoadingMain } from "./loading-main"

export const Main = () => {

  const { page } = useParams<{ page: string }>()

  const { data: movies, isLoading } = useQuery({
    queryKey: ['get-movies'],
    queryFn: async () => getMovies({ page })
  })

  if (!movies || isLoading) return <LoadingMain />

  return (
    <div className="w-full grid grid-cols-4 p-5 px-10">
      {
        movies.map((movie, index) => (
          <Animation
            key={movie.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <CardMovie movie={movie} />
          </Animation>
        ))
      }
    </div>
  )
}

"use client"

import { getMovies } from "@/hooks/use-service"
import { useQuery } from "@tanstack/react-query"
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { PaginationComponent } from "./pagination"
import { CardMovie } from "./card-movie"

export const Main = () => {

  const [parent] = useAutoAnimate({ easing: "ease-out" })

  const page = "1"

  const { data: result } = useQuery({
    queryKey: ['get-movies'],
    queryFn: async () => getMovies({ page })
  })

  if (!result) return

  const { results: movies } = result

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div
        ref={parent}
        className="w-full grid grid-cols-4 p-5 px-10"
      >
        {
          movies.map(movie => (
            <CardMovie
              key={movie.id}
              movie={movie}
            />
          ))
        }
      </div>
    </div>
  )
}

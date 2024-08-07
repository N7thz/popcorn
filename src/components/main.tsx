"use client"

import { Movie } from "@/@types"
import { useApplication } from "@/context/application-provider"
import { getMovies } from "@/hooks/use-service"
import { useQuery } from "@tanstack/react-query"
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Image from "next/image"
import { PaginationComponent } from "./pagination-component"

export const Main = () => {

  const { relativePath } = useApplication()

  const [parent] = useAutoAnimate({ easing: "ease-out" })

  const { data: result } = useQuery({
    queryKey: ['get-movies'],
    queryFn: async () => getMovies({ page: "1" })
  })

  if (!result) return

  const movies: Movie[] = result.results

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div
        ref={parent}
        className="w-full grid grid-cols-4 p-5"
      >
        {
          movies.map(movie => {
            const { id, title, poster_path } = movie
            const url = relativePath + poster_path

            return (
              <div
                key={id}
                className="flex flex-col gap-2 items-center"
              >
                <Image
                  src={url}
                  width={200}
                  height={200}
                  quality={100}
                  alt={title}
                />
                <span>
                  {title}
                </span>
              </div>
            )
          })
        }
      </div>
      <PaginationComponent />
    </div>
  )
}

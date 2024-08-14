import { ContextProps } from "@/@types"
import { getMovieById } from "@/hooks/use-service"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(_: any, context: ContextProps) {

    const { params: { id } } = context

    console.log(context)

    const movies = await prisma.movie.findMany({
        where: {
            userId: id
        }
    })

    const getMoviesData = async () => {

        const responses = await Promise.all(

            movies.map(async movie => {

                const { id } = movie

                const response = await getMovieById(id)

                return response
            })
        )

        return responses
    }

    const myMoviesList = await getMoviesData()
        .then(res => res)
        .catch(err => console.log(err))

    console.log(myMoviesList)

    return NextResponse.json(myMoviesList)
}
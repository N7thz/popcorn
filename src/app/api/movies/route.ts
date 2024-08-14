import { postToMovieToMyListProps } from "@/@types"
import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {

    const { id, email }: postToMovieToMyListProps = await request.json()

    const userExist = await prisma.user.findUnique({
        where: {
            email
        }
    })

    console.log(userExist)

    if (!userExist) return NextResponse.json({
        message: "Email not exist."
    })

    const movieExist = await prisma.movie.findUnique({
        where: {
            id: id.toString()
        }
    })

    console.log(movieExist)

    if (movieExist) return NextResponse.json({
        message: "Movie already added."
    })

    const movie = await prisma.movie.create({
        data: {
            id: id.toString(),
            userId: userExist.id
        }
    })

    console.log(movie)

    return NextResponse.json(movie)
}
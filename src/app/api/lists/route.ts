import { AddToMovieToMyListProps } from "@/@types"
import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {

    const { id, email }: AddToMovieToMyListProps = await request.json()

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (!user) return NextResponse.json({
        message: "Email not exist."
    })

    const isMovieExist = await prisma.movie.findUnique({
        where: {
            movieId: id.toString()
        }
    })

    if (!isMovieExist) return NextResponse.json({
        message: "Movie already added."
    })

    const movie = await prisma.movie.create({
        data: {
            movieId: id.toString(),
            userId: user.id
        }
    })

    return NextResponse.json(movie)
}
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

    const movie = await prisma.movie.create({
        data: {
            id: id.toString()
        }
    })

    return NextResponse.json(movie)
}
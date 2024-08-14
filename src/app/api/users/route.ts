import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {

    const { email }: { email: string } = await request.json()

    const userExisting = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (userExisting) return NextResponse.json({
        message: "Email alredy exist."
    })


    const user = await prisma.user.create({
        data: {
            email
        }
    })

    console.log(user)

    return NextResponse.json(user)
}
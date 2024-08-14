import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(_: any, context: { params: { email: string } }) {

    const { params: { email } } = context

    console.log(email)

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    return NextResponse.json(user)
}
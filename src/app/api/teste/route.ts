import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    const response = await prisma.user.findMany()

    console.log(response)

    return NextResponse.json(response)
}
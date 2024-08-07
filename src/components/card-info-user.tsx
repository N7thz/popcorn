"use client"

import { useSession } from "next-auth/react"
import { Card, CardHeader, CardTitle } from "./ui/card"
import { Avatar, AvatarImage } from "./ui/avatar"
import { ButtonsLogin } from "./button-login"

export const CardInfoUser = () => {

    const { data } = useSession()

    if (!data || !data.user) return <ButtonsLogin />

    const { user: { image, name } } = data

    return (
        <Card className="w-full flex items-center border-none my-6">
            <CardHeader>
                <CardTitle>{name}</CardTitle>
            </CardHeader>
            <Avatar className="size-20 -translate-x-4">
                <AvatarImage
                    src={image ?? "https://github.com/shadcn.png"}
                    alt="@shadcn"
                />
            </Avatar>
        </Card>
    )
}

"use client"

import { useSession } from "next-auth/react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { ButtonsLogin } from "./button-login"

export const CardInfoUser = () => {

    const { data } = useSession()

    if (!data || !data.user) return <ButtonsLogin />

    return (
        <Card className="w-full h-4/5 flex flex-col border-none my-6">
            <CardHeader>
                <CardTitle>My list:</CardTitle>
            </CardHeader>
            <CardContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur minima id dignissimos expedita. Necessitatibus asperiores doloremque dicta dolores maxime et, distinctio possimus consequatur iure consectetur nobis eum ut magnam.
            </CardContent>
        </Card>
    )
}

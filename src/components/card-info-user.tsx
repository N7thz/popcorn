"use client"

import { useSession } from "next-auth/react"
import { useQuery } from "@tanstack/react-query"
import { getUser } from "@/hooks/use-service/internal"
import { Card, CardHeader, CardTitle } from "./ui/card"
import { ButtonsLogin } from "./button-login"
import { MyMoviesList } from "./my-movies-list"

export const CardInfoUser = () => {

    const { data } = useSession()

    const email = data?.user?.email

    const { data: user } = useQuery({
        queryKey: ['get-user'],
        queryFn: async () =>
            getUser({ email })
                .then(res => res?.data)
                .catch(err => console.log(err))
    })

    const id = user?.id!

    if (!data || !data.user) return <ButtonsLogin />

    return (
        <Card className="w-full h-4/5 flex flex-col border-none my-6">
            <CardHeader>
                <CardTitle>My list:</CardTitle>
            </CardHeader>
            <MyMoviesList id={id} />
        </Card>
    )
}
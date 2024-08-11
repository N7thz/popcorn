"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useSession } from "next-auth/react"
import { ButtonsLogin } from "./button-login"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { error } from "console"
import { twMerge } from "tailwind-merge"

export const FormCreateUser = () => {

    const { status } = useSession()

    return (
        <Card className="w-2/5">
            <CardHeader>
                <CardTitle>
                    Create user
                </CardTitle>
            </CardHeader>
            <CardContent>
                {
                    status === "authenticated"
                        ? <FormCreateUserCard />
                        : <ButtonsLogin />
                }
            </CardContent>
        </Card>
    )
}

const FormCreateUserCardSchema = z.object({
    email: z.string().email().max(255, {
        message: "email soo long."
    })
})

type FormCreateUserCardType = z.infer<typeof FormCreateUserCardSchema>

export const FormCreateUserCard = () => {

    const { data } = useSession()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormCreateUserCardType>({
        resolver: zodResolver(FormCreateUserCardSchema)
    })

    console.log(errors)

    if (!data || !data.user) return <ButtonsLogin />

    const { email } = data.user

    const isEmailExist = email !== null && email !== undefined

    function createUser(data: FormCreateUserCardType) {
        console.log(data)
    }

    return (
        <form
            onSubmit={handleSubmit(createUser)}
            className="flex flex-col gap-4"
        >
            <Label>
                Email:
            </Label>
            <Input
                readOnly={isEmailExist}
                value={email ?? undefined}
                placeholder={errors.email && errors.email.message}
                className={twMerge(
                    errors.email &&
                    "border border-destructive text-destructive italic"
                )}
                {...register("email")}
            />
            <Button
                className="w-1/2 self-end"
                type="submit"
            >
                Create User
            </Button>
        </form>
    )
}


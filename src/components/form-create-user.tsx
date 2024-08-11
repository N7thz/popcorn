"use client"

import { useSession } from "next-auth/react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { twMerge } from "tailwind-merge"
import { ButtonsLogin } from "./button-login"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Toaster } from "./ui/sonner"
import { zodResolver } from "@hookform/resolvers/zod"
import { postUser } from "@/hooks/use-service/internal"
import { z } from "zod"
import { toast } from "sonner"
import { CheckCircle, CircleCheck } from "lucide-react"

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
    const { back } = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormCreateUserCardType>({
        resolver: zodResolver(FormCreateUserCardSchema)
    })

    if (!data || !data.user) return <ButtonsLogin />

    const { email } = data.user

    const isEmailExist = email !== null && email !== undefined

    function createUser(data: FormCreateUserCardType) {

        const { email } = data

        postUser({ email })
            .then(res => {
                const { status } = res

                console.log(res.data)

                if (status !== 200) return

                toast(
                    "User created with sucess.",
                    {
                        duration: 2000,
                        style: { fontSize: "18px" },
                        icon: <CircleCheck
                            size={24}
                            className="pr-2"
                        />,
            
                    }
                )

                setTimeout(back, 3000)
            })
            .catch(err => console.log(err))
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
            <Toaster />
        </form>
    )
}


"use client"

import { signOut, useSession } from "next-auth/react"
import { LogOut } from "lucide-react"
import { CardInfoUser } from "./card-info-user"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { Button } from "./ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet"
import { twMerge } from "tailwind-merge"

export const SheetOptions = () => {

    const { data } = useSession()

    const isImageExist = (data && data.user && data.user.image)

    const urlBase = "https://github.com/shadcn.png"

    const url = isImageExist ? data?.user?.image : urlBase

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Avatar className="cursor-pointer">
                    <AvatarImage
                        src={url ?? "https://github.com/shadcn.png"}
                        alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </SheetTrigger>
            <SheetContent className={twMerge(
                !data && "flex flex-col justify-between"
            )}>
                <SheetHeader>
                    <SheetTitle>
                        {
                            (data && data.user)
                                ? `Hi, ${data.user.name}`
                                : "Guest User"
                        }
                    </SheetTitle>
                    <SheetDescription>
                        {
                            (data && data.user)
                                ? (data.user.email)
                                : "Create an account to enjoy all features"
                        }
                    </SheetDescription>
                </SheetHeader>
                <CardInfoUser />
                {
                    data &&
                    <SheetFooter>
                        <Button
                            onClick={() => signOut()}
                            className="flex items-center gap-2"
                        >
                            <LogOut size={16} />
                            Log-out
                        </Button>
                    </SheetFooter>
                }
            </SheetContent>
        </Sheet>
    )
}

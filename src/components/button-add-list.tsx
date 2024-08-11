import { addToMovieToMyList } from "@/hooks/use-service/internal"
import { MovieDetails as MovieDetailsProps } from "@/@types"
import { useRouter } from "next/navigation"
import { CircleCheck, CopyPlus } from "lucide-react"
import { useSession } from "next-auth/react"
import { Button } from "./ui/button"
import { Toaster } from "./ui/sonner"
import { toast } from "sonner"

export interface ButtonAddListProps {
    result: MovieDetailsProps
}

export const ButtonAddList = ({ result }: ButtonAddListProps) => {

    const { data } = useSession()
    const { push } = useRouter()

    function addToMyList(result: MovieDetailsProps) {

        const { id } = result

        if (!data || !data.user) return push("/create-user")

        const { email } = data.user

        if (!email) return push("/create-user")

        addToMovieToMyList({ id, email })
            .then(res => {
                const { data } = res

                if (data.message === "Email not exist.") push("/create-user")

                toast(
                    "The movie has been successfully added to the list.",
                    {
                        duration: 2000,
                        style: { fontSize: 18 },
                        icon: <CircleCheck
                            size={24}
                            className="pr-2"
                        />
                    }
                )
            })
            .catch(err => console.log(err))

    }

    return (
        <>
            <Button
                variant={"outline"}
                className="w-full flex items-center gap-2"
                onClick={() => addToMyList(result)}
            >
                Add to my list
                <CopyPlus className="size-4" />
            </Button>
            <Toaster />
        </>
    )
}

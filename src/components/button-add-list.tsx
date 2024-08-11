import { addToMovieToMyList } from "@/hooks/use-service/internal"
import { MovieDetails as MovieDetailsProps } from "@/@types"
import { useRouter } from "next/navigation"
import { CopyPlus } from "lucide-react"
import { useSession } from "next-auth/react"
import { Button } from "./ui/button"

export const ButtonAddList = ({ result }: { result: MovieDetailsProps }) => {

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
            })
            .catch(err => console.log(err))

    }

    return (
        <Button
            variant={"outline"}
            className="w-full flex items-center gap-2"
            onClick={() => addToMyList(result)}
        >
            Add to my list
            <CopyPlus className="size-4" />
        </Button>
    )
}

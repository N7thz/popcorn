import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
import { Github, Chrome } from "lucide-react"

export const ButtonsLogin = () => {
    return (
        <div className="w-full flex justify-around gap-2">
            <Button
                onClick={() => signIn("google")}
                className="bg-zinc-900 w-full"
                variant="outline"
            >
                <Chrome />
            </Button>

            <Button
                onClick={() => signIn("github")}
                className="bg-zinc-900 w-full"
                variant="outline"
            >
                <Github />
            </Button>
        </div>
    )
}

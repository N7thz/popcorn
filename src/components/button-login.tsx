import { signIn } from "next-auth/react"
import { Github } from "lucide-react"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Separator } from "./ui/separator"
import { Google } from "./google-icon"

export const ButtonsLogin = () => { 
    return (
        <div className="w-full flex flex-col justify-around gap-4 my-4">
            <div className="w-full flex items-center justify-center gap-3">
                <Separator className="w-1/3" />
                <Label>
                    Sign-in
                </Label>
                <Separator className="w-1/3" />
            </div>
            <div className="flex gap-3 items-center">
                <Button
                    onClick={() => signIn("google")}
                    className="bg-zinc-900 w-full"
                    variant="outline"
                >
                    <Google size={24} />
                </Button>

                <Button
                    onClick={() => signIn("github")}
                    className="bg-zinc-900 w-full"
                    variant="outline"
                >
                    <Github size={24}/>
                </Button>
            </div>
        </div>
    )
}

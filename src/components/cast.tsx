import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"
import { Button } from "./ui/button"
import { useApplication } from "@/context/application-provider"
import { getCastMovie, getReviewsMovie } from "@/hooks/use-service"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"
import { ScrollArea } from "./ui/scroll-area"
import { CastCard } from "./cast-card"
import { Clapperboard } from "lucide-react"

export const Cast = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="flex gap-2"
                >
                    See Cast
                    <Clapperboard className="size-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="w-10/12 h-5/6 flex flex-col gap-6">
                <ScrollArea>
                    <DialogHeader>
                        <DialogTitle>Cast</DialogTitle>
                    </DialogHeader>
                    <CastCard />
                </ScrollArea>
            </DialogContent>
        </Dialog >
    )
}

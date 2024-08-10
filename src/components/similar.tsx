import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"
import { Button } from "./ui/button"
import { Cable } from "lucide-react"
import { SimilarCard } from "./similar-card"

export const Similar = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="flex gap-2"
                >
                    See Similars
                    <Cable className="size-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="w-10/12 flex flex-col gap-6">
                <DialogHeader>
                    <DialogTitle>Reviews</DialogTitle>
                </DialogHeader>
                <SimilarCard />
            </DialogContent>
        </Dialog >
    )
}

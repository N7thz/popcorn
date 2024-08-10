import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Button } from "./ui/button"
import { ReviewCard } from "./review-card"
import { MessageCircleCode } from "lucide-react"

export const Reviews = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex gap-2"
        >
          See Reviews
          <MessageCircleCode className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-10/12 flex flex-col gap-6">
        <DialogHeader>
          <DialogTitle>Reviews</DialogTitle>
        </DialogHeader>
        <ReviewCard />
      </DialogContent>
    </Dialog >
  )
}

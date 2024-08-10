import { useQuery } from "@tanstack/react-query"
import { getReviewsMovie } from "@/hooks/use-service"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Button } from "./ui/button"
import { ReviewCard } from "./review-card"

export const Reviews = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">See Reviews</Button>
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

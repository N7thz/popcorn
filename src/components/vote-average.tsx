import { Star, StarHalf } from "lucide-react"
import { Label } from "./ui/label"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

export interface VoteAverageProps extends ComponentProps<"div"> {
    vote_average: number
}

export const VoteAverage = ({ vote_average, className }: VoteAverageProps) => {

    const array = Array.from<number>({ length: vote_average })
    const length = array.length

    const isNotIntergerNumber = (
        vote_average > length && vote_average < length + 1
    )

    return (
        <div className="flex items-center gap-3">
            <Label>
                Vote average:
            </Label>
            <div className="w-auto text-sm flex gap-1">
                {
                    array.map((_, index) =>
                        <Star
                            key={index}
                            className={twMerge(
                                "text-yellow-500",
                                className
                            )}
                        />
                    )
                }
                {
                    isNotIntergerNumber &&
                    <StarHalf className={twMerge(
                        "text-yellow-500",
                        className
                    )} />
                }
            </div>
        </div>
    )
}

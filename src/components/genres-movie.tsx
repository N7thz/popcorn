import { GenresMovieProps } from "@/@types"
import { Label } from "./ui/label"
import { Button } from "./ui/button"

export const GenresMovie = ({ genres }: GenresMovieProps) => {
    return (
        <div className="flex flex-col gap-3">
            <Label>
                Genres:
            </Label>
            <div className="flex gap-3">
                {
                    genres.map(genre => {
                        const { id, name } = genre

                        return (
                            <Button
                                key={id}
                                variant={"secondary"}
                            >
                                {name}
                            </Button>
                        )
                    })
                }
            </div>
        </div>
    )
}

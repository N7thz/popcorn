import { GenresMovieProps } from "@/@types"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { ScrollArea, ScrollBar } from "./ui/scroll-area"

export const GenresMovie = ({ genres }: GenresMovieProps) => {
    return (
        <div className="w-full flex flex-col gap-3">
            <Label>
                Genres:
            </Label>
            <ScrollArea className="max-w-[400px] h-16 p-2">
                <div className="w-full flex gap-3 items-center px-2">
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
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    )
}

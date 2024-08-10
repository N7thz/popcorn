import { useApplication } from "@/context/application-provider"
import { getSimilarMovies } from "@/hooks/use-service"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { ScrollBar, ScrollArea } from "./ui/scroll-area"
import { VoteAverage } from "./vote-average"
import Link from "next/link"

export const SimilarCard = () => {

    const { id } = useParams<{ id: string }>()

    const { relativePath } = useApplication()

    const { data: similars } = useQuery({
        queryKey: ['get-similar', id],
        queryFn: async () => getSimilarMovies(id)
    })

    if (!similars) return

    return (
        <ScrollArea
            className="w-full max-h-[600px] flex flex-col px-4"
        >
            <ScrollBar />
            <div className="grid grid-cols-1 gap-3 px-4 mt-6">
                {
                    similars.map(similar => {
                        const {
                            id, poster_path, title, vote_average
                        } = similar

                        const url = relativePath + poster_path

                        return (
                            <Link
                                key={id}
                                href={`/movies/details/${id}`}
                            >
                                <Card

                                    className="flex items-center gap-3 w-auto border-violet-600 cursor-pointer"
                                >
                                    <Avatar
                                        className="size-[120px] rounded-none"
                                    >
                                        <AvatarImage
                                            src={url}
                                            alt="@shadcn"
                                            className=""
                                        />
                                        <AvatarFallback
                                            className="rounded-none"
                                        >
                                            {`${title[0]}${title[1]}`}
                                        </AvatarFallback>
                                    </Avatar>
                                    <CardHeader>
                                        <CardTitle className="text-2xl">
                                            {title}
                                        </CardTitle>
                                        <CardDescription>
                                            <VoteAverage
                                                vote_average={vote_average}
                                                className="size-5"
                                            />
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>
                        )
                    })
                }
            </div>
        </ScrollArea>
    )
}
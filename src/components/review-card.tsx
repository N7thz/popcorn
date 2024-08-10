import {
    Card, CardContent, CardDescription, CardHeader, CardTitle
} from "./ui/card"
import { ScrollArea, ScrollBar } from "./ui/scroll-area"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { formatDate } from "date-fns"
import { MessageCircleMore } from "lucide-react"
import { useApplication } from "@/context/application-provider"
import { getReviewsMovie } from "@/hooks/use-service"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"

export const ReviewCard = () => {

    const { id } = useParams<{ id: string }>()

    const { relativePath } = useApplication()

    const { data: reviews, isLoading } = useQuery({
        queryKey: ['get-reviews', id],
        queryFn: async () => getReviewsMovie(id)
    })

    console.log(reviews)

    if (!reviews || isLoading) return <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quibusdam fuga voluptatibus quidem perspiciatis quam tempora, nostrum consequatur dignissimos error nulla enim maiores, aspernatur fugiat temporibus voluptas, non cupiditate est.
    </p>

    return (
        <ScrollArea
            className="w-full max-h-[600px] flex flex-col px-4"
        >
            <ScrollBar />
            {
                reviews.length === 0
                    ? <p
                        className="w-full text-center text-muted-foreground italic"
                    >
                        No reviews for this movie
                    </p>
                    : reviews.map(review => {
                        const {
                            id,
                            author,
                            content,
                            created_at,
                            author_details: {
                                avatar_path
                            }
                        } = review

                        return (
                            <Card
                                key={id}
                                className="w-full border-violet-600 my-6"
                            >
                                <CardHeader>
                                    <CardTitle
                                        className="flex items-center gap-4 text-violet-600/90"
                                    >
                                        {
                                            avatar_path &&
                                            <Avatar>
                                                <AvatarImage
                                                    src={relativePath + avatar_path}
                                                    alt="@shadcn"
                                                />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                        }
                                        <span>{author}</span>
                                        <MessageCircleMore />
                                    </CardTitle>
                                    <CardDescription>
                                        {formatDate(created_at, "PPP")}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {content}
                                </CardContent>
                            </Card>
                        )
                    })
            }
        </ScrollArea>
    )
}

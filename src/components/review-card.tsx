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

    const { data: reviews } = useQuery({
        queryKey: ['get-reviews'],
        queryFn: async () => getReviewsMovie(id)
    })

    if (!reviews) return

    return (
        <ScrollArea
            className="w-full max-h-[600px] flex flex-col px-4"
        >
            <ScrollBar />
            {
                reviews.map(review => {
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

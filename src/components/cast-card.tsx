import { useApplication } from "@/context/application-provider"
import { getCastMovie } from "@/hooks/use-service"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"
import { Card } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { url } from "inspector"

export const CastCard = () => {

    const { id } = useParams<{ id: string }>()

    const { relativePath } = useApplication()

    const { data: cast } = useQuery({
        queryKey: ['get-cast', id],
        queryFn: async () => getCastMovie(id)
    })

    if (!cast) return

    console.log(cast)

    return (
        <div className="grid grid-cols-2 gap-3 px-4 mt-6">
            {
                cast.map(person => {
                    const { id, name, character, profile_path } = person

                    const url = relativePath + profile_path

                    return (
                        <Card
                            key={id}
                            className="flex items-center gap-3 p-2 w-auto border-violet-600"
                        >
                            <Avatar className="size-20">
                                <AvatarImage
                                    src={url}
                                    alt="@shadcn"
                                    className="object-cover"
                                />
                                <AvatarFallback>
                                    {`${name[0]}${name[1]}`}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                {`${name} / ${character}`}
                            </div>
                        </Card>
                    )

                })
            }
        </div>
    )
}

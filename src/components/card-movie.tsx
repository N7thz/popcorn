import { Movie } from "@/@types"
import { useApplication } from "@/context/application-provider"
import { Heart } from "lucide-react"
import Image from "next/image"
import { Card, CardHeader, CardTitle } from "./ui/card"

export interface CardMovieProps {
    movie: Movie
}

export const CardMovie = ({ movie }: CardMovieProps) => {

    const { relativePath } = useApplication()

    const { title, poster_path } = movie
    const url = relativePath + poster_path

    return (
        <Card
            className="w-[220px] border-none drop-shadow-2xl my-3 relative group rounded-md overflow-hidden cursor-pointer hover:scale-95 duration-100"
        >
            <Image
                src={url}
                width={200}
                height={200}
                quality={100}
                alt={title}
                className="size-full "
            />
            <CardHeader
                className="w-full absolute bottom-0 left-0 bg-background border border-violet-600 rounded-se-3xl rounded-b-md px-3 invisible group-hover:visible transition-opacity"
            >
                <CardTitle
                    className="text-base w-11/12 whitespace-nowrap overflow-ellipsis overflow-hidden"
                >
                    {title}
                </CardTitle>
            </CardHeader>
            <Heart
                className="absolute top-3 right-3 transition-transform cursor-pointer invisible group-hover:visible"
            />
        </Card>
    )
}
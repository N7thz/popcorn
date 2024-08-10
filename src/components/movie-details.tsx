"use client"

import { getMovieById } from "@/hooks/use-service"
import { useQuery } from "@tanstack/react-query"
import { useApplication } from "@/context/application-provider"
import { useParams } from "next/navigation"
import { formatDate } from "date-fns"
import {
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from "./ui/card"
import { Carousel } from "./carrosel"
import Image from "next/image"
import Link from "next/link"
import { GenresMovie } from "./genres-movie"
import { ScrollArea } from "./ui/scroll-area"
import { Button } from "./ui/button"
import { Reviews } from "./reviews"

export const MovieDetails = () => {

    const { id } = useParams<{ id: string }>()

    const { relativePath } = useApplication()

    const { data: result, isLoading } = useQuery({
        queryKey: ['get-movie-by-id'],
        queryFn: async () => getMovieById(id)
    })

    if (!result || isLoading) return

    const {
        title, poster_path, overview, release_date, genres, homepage
    } = result

    const date = formatDate(release_date, "PPP")

    const url = relativePath + poster_path

    console.log(result)

    return (
        <Card
            className="w-10/12 h-[600px] flex rounded-lg overflow-hidden border-violet-600"
        >
            <Image
                src={url}
                width={300}
                height={300}
                alt={`image ${title} details`}
                className="w-1/2"
            />
            <ScrollArea
                className="w-1/2 mim-h-full flex flex-col justify-between gap-6"
            >
                <CardHeader className="flex flex-col gap-2">
                    <CardTitle>
                        {title}
                    </CardTitle>
                    <p>
                        Release date: {date}
                    </p>
                    <CardDescription className="text-justify">
                        {overview}
                    </CardDescription>
                </CardHeader>
                <CardContent
                    className="flex flex-col gap-6 mim-h-full"
                >
                    <GenresMovie genres={genres} />
                    <Carousel id={id} />
                    <Reviews />
                </CardContent>
                <CardFooter className="flex items-center justify-end">
                    <Link href={homepage} target="_blank">
                        <Button variant={"link"}>
                            Home page
                        </Button>
                    </Link>
                </CardFooter>
            </ScrollArea>
        </Card>
    )
}
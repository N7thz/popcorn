"use client"

import { getMovieById } from "@/hooks/use-service"
import { useQuery } from "@tanstack/react-query"
import { useApplication } from "@/context/application-provider"
import { useParams } from "next/navigation"
import { formatDate } from "date-fns"
import { Globe, Heart } from "lucide-react"
import {
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from "./ui/card"
import { ScrollArea } from "./ui/scroll-area"
import { Button } from "./ui/button"
import { Carousel } from "./carrosel"
import { GenresMovie } from "./genres-movie"
import { Reviews } from "./reviews"
import { LoadingDetails } from "./loading-details"
import { VoteAverage } from "./vote-average"
import { Cast } from "./cast"
import { Similar } from "./similar"
import { ButtonAddList } from "./button-add-list"
import Image from "next/image"
import { HeartIcon } from "./heart-icon"
import Link from "next/link"

export const MovieDetails = () => {

    const { id } = useParams<{ id: string }>()
    const { relativePath } = useApplication()

    const { data: result, isLoading } = useQuery({
        queryKey: ['get-movie-by-id', id],
        queryFn: async () => getMovieById(id)
    })

    if (!result || isLoading) return <LoadingDetails />

    const {
        title,
        poster_path,
        overview,
        release_date,
        genres,
        homepage,
        vote_average,
        backdrop_path
    } = result

    const date = formatDate(release_date, "PPP")

    const url = relativePath + poster_path
    const background = relativePath + backdrop_path

    return (
        <div
            className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-cover relative"
            style={{ backgroundImage: `url('${background}')` }}
        >
            <div className="absolute inset-0 backdrop-blur-[5px]" />
            <Card
                className="w-10/12 h-[600px] flex rounded-lg overflow-hidden border-none z-50"
            >
                <div className="w-1/2 h-full relative">
                    <Image
                        src={url}
                        width={300}
                        height={300}
                        alt={`image ${title} details`}
                        className="size-full"
                    />
                    <HeartIcon />
                </div>
                <ScrollArea
                    className="w-1/2 min-h-full flex flex-col justify-between gap-6"
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
                        <VoteAverage vote_average={vote_average} />
                        <GenresMovie genres={genres} />
                        <Carousel id={id} />
                        <div className="flex flex-col gap-4">
                            <Cast />
                            <Reviews />
                            <Similar />
                        </div>
                    </CardContent>
                    <CardFooter className="flex items-center justify-end gap-4">
                        <ButtonAddList result={result} />
                        <Link
                            href={homepage}
                            target="_blank"
                            className="w-full"
                        >
                            <Button
                                variant={"outline"}
                                className="w-full flex items-center gap-2"
                            >
                                Home page
                                <Globe className="size-4" />
                            </Button>
                        </Link>
                    </CardFooter>
                </ScrollArea>
            </Card>
        </div>
    )
}
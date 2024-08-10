import {
    Carousel as CarouselComponent,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useApplication } from "@/context/application-provider"
import { getImagesMovie } from "@/hooks/use-service"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { Label } from "./ui/label"

export const Carousel = ({ id }: { id: string }) => {

    const { relativePath } = useApplication()

    const { data: images, isLoading } = useQuery({
        queryKey: ['get-images', id],
        queryFn: async () => getImagesMovie(id)
    })

    console.log(isLoading)

    if (!images) return

    return (
        <>
            <Label>
                Images:
            </Label>
            <CarouselComponent className="w-11/12 max-w-xs translate-x-9">
                <CarouselContent>
                    {
                        images.map((image, index) => {
                            const { file_path, height, width } = image

                            const url = relativePath + file_path

                            return (
                                <CarouselItem key={index}>
                                    <Image
                                        src={url}
                                        width={width}
                                        height={height}
                                        alt="image"
                                        className="rounded-md"
                                    />
                                </CarouselItem>
                            )
                        })
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </CarouselComponent>
        </>
    )
}

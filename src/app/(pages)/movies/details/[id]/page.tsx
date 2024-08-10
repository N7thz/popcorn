import type { GenerateMetadataProps, MovieDetails as Props } from "@/@types"
import { MovieDetails } from "@/components/movie-details"
import { api } from "@/hooks/use-service"
import type { Metadata } from 'next'

export async function generateMetadata({
    params: { id }
}: GenerateMetadataProps): Promise<Metadata> {

    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`

    const response: Props = await api
        .get(url)
        .then(res => res.data)
        .catch(err => console.log(err))

    const { title } = response

    return {
        title: title
    }
}

export default function Page() {
    return (
        <MovieDetails />
    )
}
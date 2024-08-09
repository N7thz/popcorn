import type { MovieDetails as Props } from "@/@types"
import { MovieDetails } from "@/components/movie-details"
import { api } from "@/hooks/use-service"
import type { Metadata } from 'next'

export interface GenerateMetadataProps {
    params: {
        id: string
    }
}

export async function generateMetadata({
    params: { id }
}: GenerateMetadataProps): Promise<Metadata> {

    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`

    const response: Props = await api
        .get(url)
        .then(res => res.data)
        .catch(err => console.log(err))

    const { original_title } = response

    return {
        title: original_title
    }
}

export default function Page() {
    return (
        <MovieDetails />
    )
}
import { getMyMoviesList } from "@/hooks/use-service/internal"
import { useQuery } from "@tanstack/react-query"
import { CardMovie } from "./card-movie"
import { ScrollArea } from "./ui/scroll-area"
import { Card } from "./ui/card"

export const MyMoviesList = ({ id }: { id: string }) => {

    const { data: moviesList } = useQuery({
        queryKey: ['get-movies-list'],
        queryFn: async () =>
            getMyMoviesList(id)
                .then(res => res?.data)
                .catch(err => console.log(err))
    })

    console.log(moviesList)

    if (!moviesList) return <Card
        className="animate-pulse size-full bg-secondary"
    />

    return (
        <ScrollArea className="h-5/6">
            {
                moviesList.length === 0
                    ? <p>teste</p>
                    : moviesList.map(movie =>
                        <CardMovie
                            key={movie.id}
                            movie={movie}
                        />
                    )
            }
        </ScrollArea>
    )
}

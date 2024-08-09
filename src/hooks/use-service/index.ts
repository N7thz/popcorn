import { GetMoviesProps, MovieDetails, Result } from "@/@types"
import axios, { AxiosResponse } from "axios"

export const api = axios.create({
    baseURL: "https://api.themoviedb.org",
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjY2MTNiOGFiMTdiOTVlMWQ0ZTIxN2M4MDIxNjg3OCIsInN1YiI6IjY2MDFiZjU4N2Y2YzhkMDE3YzczY2ViZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._kLbBy7CWJi95SqVsNbLjx64ijpSD2iFluDUHoBmDNo"
    }
})

async function getMovies({ order = "desc", page = "1" }: GetMoviesProps): Promise<Result> {

    const url = `/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=${page}&sort_by=popularity.${order}`

    const response: Result = await api
        .get(url)
        .then(res => res.data)
        .catch(err => console.log(err))

    console.log(response.results)

    return response
}

async function getMovieById(id: string): Promise<MovieDetails> {

    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`

    const response = await api
        .get(url)
        .then(res => res.data)
        .catch(err => console.log(err))

    console.log(response)

    return response
}

export {
    getMovies,
    getMovieById
}
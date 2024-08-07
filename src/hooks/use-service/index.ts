import { GetMoviesProps, Result } from "@/@types"
import axios from "axios"

export const api = axios.create({
    baseURL: "https://api.themoviedb.org",
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjY2MTNiOGFiMTdiOTVlMWQ0ZTIxN2M4MDIxNjg3OCIsInN1YiI6IjY2MDFiZjU4N2Y2YzhkMDE3YzczY2ViZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._kLbBy7CWJi95SqVsNbLjx64ijpSD2iFluDUHoBmDNo"
    }
})

async function getMovies({ order = "desc", page = "1" }: GetMoviesProps) {

    const url = `/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=${page}&sort_by=popularity.${order}`

    const response = await api.get(url)

    const data: Result = response.data

    return data
}

export {
    getMovies
}
import {
    postToMovieToMyListProps,
    CastResponse,
    ImagesResponse,
    MovieDetails,
    Result,
    ReviewsResponse,
    SimilarResponse
} from "@/@types"
import axios from "axios"

const token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjY2MTNiOGFiMTdiOTVlMWQ0ZTIxN2M4MDIxNjg3OCIsInN1YiI6IjY2MDFiZjU4N2Y2YzhkMDE3YzczY2ViZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._kLbBy7CWJi95SqVsNbLjx64ijpSD2iFluDUHoBmDNo"

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: token
    }
})

async function getMovies(page = "1") {

    const url = `/discover/movie?include_adult=true&include_video=true&language=en-US&page=${page}&sort_by=popularity.desc`

    const response: Result = await api
        .get(url)
        .then(res => res.data)
        .catch(err => console.log(err))

    return response.results
}

async function getMovieById(id: string) {

    const url = `/movie/${id}?language=en-US`

    const response: MovieDetails = await api
        .get(url)
        .then(res => res.data)
        .catch(err => console.log(err))

    return response
}

async function getImagesMovie(id: string) {

    const url = `/movie/${id}/images`

    const response: ImagesResponse = await api
        .get(url)
        .then(res => res.data)
        .catch(err => console.log(err))

    return response.backdrops
}

async function getReviewsMovie(id: string) {

    const url = `/movie/${id}/reviews?language=en-US&page=1`

    const response: ReviewsResponse = await api
        .get(url)
        .then(res => res.data)
        .catch(err => console.log(err))

    return response.results
}

async function getCastMovie(id: string) {

    const url = `/movie/${id}/credits?language=en-US`

    const response: CastResponse = await api
        .get(url)
        .then(res => res.data)
        .catch(err => console.log(err))

    return response.cast
}

async function getSimilarMovies(id: string) {

    const url = `/movie/${id}/similar?language=en-US&page=1`

    const response: SimilarResponse = await api
        .get(url)
        .then(res => res.data)
        .catch(err => console.log(err))

    return response.results
}

export {
    getMovies,
    getMovieById,
    getImagesMovie,
    getReviewsMovie,
    getCastMovie,
    getSimilarMovies
}
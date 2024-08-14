import { EmailProps, Movie, postToMovieToMyListProps } from "@/@types"
import axios, { AxiosResponse } from "axios"
import {User } from "@prisma/client"

async function postToMovieToMyList({ id, email }: postToMovieToMyListProps) {

    const url = "/api/movies"

    return axios.post(url, { id, email })
}

async function getMyMoviesList(id: string | undefined):Promise<AxiosResponse<Movie[]> | undefined> {

    if (id) return

    const url = `/api/movies/${id}`

    return axios.get(url)
}

async function postUser({ email }: EmailProps): Promise<AxiosResponse<User>> {

    const url = "/api/users"

    return axios.post(url, { email })
}

async function getUser({ email }: EmailProps):
    Promise<AxiosResponse<User> | undefined> {

    const url = `/api/users/${email}`

    if (!email) return

    return axios.get(url)
}

export {
    postToMovieToMyList,
    getMyMoviesList,
    postUser,
    getUser
}
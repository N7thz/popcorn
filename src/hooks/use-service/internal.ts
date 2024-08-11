import { AddToMovieToMyListProps } from "@/@types"
import axios from "axios"

async function addToMovieToMyList({
    id, email
}: AddToMovieToMyListProps) {

    const url = "/api/lists"

    return axios.post(url, { id, email })
}

async function postUser({ email }: { email: string }) {

    const url = "/api/users"

    return axios.post(url, { email })
}

export {
    addToMovieToMyList,
    postUser
}
import { AddToMovieToMyListProps} from "@/@types"
import axios from "axios"

async function addToMovieToMyList({
    id, email
}: AddToMovieToMyListProps) {

    const url = "/api/lists"

    return axios.post(url, { id, email })
}

export {
    addToMovieToMyList
}
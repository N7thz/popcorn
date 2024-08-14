import { ComponentProps, ReactNode } from "react"
import {
    Target, VariantLabels, TargetAndTransition, Transition, AnimationControls
} from "framer-motion"

export interface Result {
    page: number
    results: Movie[]
}

export interface ImagesResponse {
    backdrops: Backdrop[]
    id: number
    logos: Backdrop[]
    posters: Backdrop[]
}

export interface ReviewsResponse {
    id: number
    page: number
    results: Reviews[]
    total_pages: number
    total_results: number
}

export interface CastResponse {
    id: number
    cast: Cast[]
    crew: Cast[]
}

export interface Movie {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface GoogleProps extends ComponentProps<"svg"> {
    size?: number
}

export interface AnimationProps extends ComponentProps<"div"> {
    children: ReactNode
    initial?: boolean | Target | VariantLabels
    whileInView?: VariantLabels | TargetAndTransition
    exit?: TargetAndTransition | VariantLabels
    transition?: Transition
    animate?: AnimationControls | TargetAndTransition | VariantLabels | boolean
}

export interface CardMovieProps extends ComponentProps<"div"> {
    movie: Movie
}

export interface MovieDetails {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: BelongsToCollection
    budget: number
    genres: Genre[]
    homepage: string
    id: number
    imdb_id: string
    origin_country: string[]
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: ProductionCompany[]
    production_countries: ProductionCountry[]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: SpokenLanguage[]
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface BelongsToCollection {
    id: number
    name: string
    poster_path: string
    backdrop_path: string
}

export interface Genre {
    id: number
    name: string
}

export interface ProductionCompany {
    id: number
    logo_path?: string
    name: string
    origin_country: string
}

export interface ProductionCountry {
    iso_3166_1: string
    name: string
}

export interface SpokenLanguage {
    english_name: string
    iso_639_1: string
    name: string
}

export interface GenerateMetadataProps {
    params: {
        id: string
    }
}

export interface Backdrop {
    aspect_ratio: number
    height: number
    iso_639_1?: string
    file_path: string
    vote_average: number
    vote_count: number
    width: number
}

export interface GenresMovieProps {
    genres: Genre[]
}

export interface Reviews {
    author: string
    author_details: AuthorDetails
    content: string
    created_at: string
    id: string
    updated_at: string
    url: string
}

export interface AuthorDetails {
    name: string
    username: string
    avatar_path?: string
    rating: number
}

export interface VoteAverageProps {
    vote_average: number
}

export interface Cast {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path?: string
    cast_id: number
    character: string
    credit_id: string
    order: number
}

export interface SimilarResponse {
    page: number
    results: Similar[]
    total_pages: number
    total_results: number
}

export interface Similar {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface postToMovieToMyListProps {
    id: number
    email: string
}

export interface EmailProps {
    email: string | null | undefined
}

export interface ContextProps {
    params: {
        id: string
    }
}
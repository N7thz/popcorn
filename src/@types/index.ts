import { ComponentProps, ReactNode } from "react"
import { 
    Target, VariantLabels, TargetAndTransition, Transition, AnimationControls 
} from "framer-motion"

export interface Result {
    page: number
    results: Movie[]
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

export interface GetMoviesProps {
    order?: string
    page?: string
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
	animate?: AnimationControls | TargetAndTransition | VariantLabels | boolean;
}
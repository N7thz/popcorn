import { Heart } from "lucide-react"
import { Movie, User } from "@prisma/client"
import { Animation } from "./animation"
import Image from "next/image"

export const HeartIcon = (user: User, movie: Movie) => {

    const {  } = movie

    if (true) {
        return (
            <Heart
                className="absolute top-4 right-4 cursor-pointer size-8"
            />
        )
    }

    return (
        <Animation
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Image
                src={"/heart-icon.png"}
                width={32}
                height={32}
                alt="heart image"
                className="absolute top-4 right-4 cursor-pointer size-8"
            />
        </Animation>
    )
}

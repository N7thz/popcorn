"use client"

import { api } from "@/hooks/use-service"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { 
    Dispatch, 
    ReactNode, 
    SetStateAction, 
    createContext, 
    useContext, 
    useEffect, 
    useState 
} from "react"

interface ApplicationContextProps {
    status: "loading" | "authenticated" | "unauthenticated"
    setStatus: Dispatch<SetStateAction<
        "loading" | "authenticated" | "unauthenticated"
    >>
    relativePath: string
}

const ApplicationContext = createContext({} as ApplicationContextProps)

export function ApplicationProvider({ children }: { children: ReactNode }) {

    const [status, setStatus] = useState<
        "loading" | "authenticated" | "unauthenticated"
    >("unauthenticated")

    const relativePath = "https://image.tmdb.org/t/p/original"

    const { push } = useRouter()

    useEffect(() => {
        setStatus(status)
        status === "authenticated" && push("/")
        console.log(status)
    }, [push, setStatus, status])

    const value: ApplicationContextProps = {
        relativePath, 
        status, setStatus
    }

    return (
        <ApplicationContext.Provider value={value}>
            {children}
        </ApplicationContext.Provider>
    )
}

export const useApplication = () => useContext(ApplicationContext)
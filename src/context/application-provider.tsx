"use client"

import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
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

    let statusType: "loading" | "authenticated" | "unauthenticated"

    const [status, setStatus] = useState<typeof statusType>("unauthenticated")

    const relativePath = "https://image.tmdb.org/t/p/original"

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
"use client"

import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState
} from "react"

let statusType: "loading" | "authenticated" | "unauthenticated"

interface ApplicationContextProps {
    status: typeof statusType
    setStatus: Dispatch<SetStateAction<typeof statusType>>
    relativePath: string
}

const ApplicationContext = createContext({} as ApplicationContextProps)

export function ApplicationProvider({ children }: { children: ReactNode }) {

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
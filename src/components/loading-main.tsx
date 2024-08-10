import { Skeleton } from "./ui/skeleton"

export const LoadingMain = () => {

    const array = Array.from<number>({ length: 8 })
    
    return (
        <div
            className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center"
        >
            <div className="w-full grid grid-cols-4 p-5 px-10">
                {
                    array.map((_, index) => (
                        <Skeleton
                            key={index}
                            className="w-[220px] h-[300px] m-6"
                        />
                    ))
                }
            </div>
        </div>
    )
}

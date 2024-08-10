import { Card, CardContent, CardHeader } from "./ui/card"
import { Skeleton } from "./ui/skeleton"

export const LoadingDetails = () => {

    const array = Array.from<number>({ length: 3 })

    return (
        <div
            className="min-h-[calc(100vh-64px)] flex items-center justify-center"
        >
            <Card
                className="w-10/12 h-[600px] flex rounded-lg overflow-hidden border-violet-600"
            >
                <Skeleton className="w-1/2 h-full rounded-none" />
                <div
                    className="w-1/2 mim-h-full flex flex-col gap-6"
                >
                    <CardHeader className="flex flex-col gap-8">
                        <Skeleton className="w-3/4 h-6 rounded-full" />
                        <Skeleton className="w-full h-36 rounded-lg" />
                    </CardHeader>
                    <CardContent
                        className="flex flex-col gap-6 mim-h-full"
                    >
                        <div className="flex flex-col gap-3">
                            <Skeleton className="w-12 h-6 rounded-full" />
                            <div className="flex items-center gap-3">
                                {
                                    array.map((_, index) =>
                                        <Skeleton
                                            key={index}
                                            className="h-9 w-full"
                                        />
                                    )
                                }
                            </div>
                        </div>
                    </CardContent>
                </div>
            </Card>
        </div>
    )
}
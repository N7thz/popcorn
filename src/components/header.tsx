import { Popcorn } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { SheetOptions } from "./sheet-options"
import { Card, CardHeader, CardTitle } from "./ui/card"

export const Header = () => {
    return (
        <Card
            className="w-full rounded-none border-b-2 border-violet-600 border-x-0 border-t-0 flex items-center justify-between sticky top-0 left-0 right-0 z-50"
        >
            <CardHeader>
                <CardTitle className="flex gap-2 items-center">
                    <span className="capitalize">
                        popcorn films
                    </span>
                    <Popcorn className="text-violet-600" />
                </CardTitle>
            </CardHeader>
            <div className="flex items-center gap-4 pr-4">
                <ModeToggle />
                <SheetOptions />
            </div>
        </Card>
    )
}

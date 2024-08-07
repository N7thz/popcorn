import { ModeToggle } from "./mode-toggle"
import { Card, CardHeader, CardTitle } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Popcorn } from "lucide-react"
import { SheetOptions } from "./sheet-options"

export const Header = () => {
    return (
        <Card
            className="w-full rounded-none border-b-2 border-violet-600 border-x-0 border-t-0 flex items-center justify-between"
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

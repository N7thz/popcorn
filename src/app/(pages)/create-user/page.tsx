import { FormCreateUser } from '@/components/form-create-user'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Popcorn App | create user",
}

export default function Page() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <FormCreateUser />
        </div>
    )
}
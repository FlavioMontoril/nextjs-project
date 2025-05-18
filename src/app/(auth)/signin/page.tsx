'use client'
import { toast } from "sonner";

export default function SignIn() {

    const loading = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 1000));
    toast.promise(loading, { loading: 'Loading...', });

    return (
        <div className="bg-green-300 w-full h-screen">
            <h1>Page Sign In</h1>
        </div>
    )
}
'use client'
import { useParams } from "next/navigation"

export default function Product() {

    const { code } = useParams();

    return (
        <div className="bg-blue-300 w-full h-screen">
            <h1>Product: {code}</h1>
        </div>
    )
}
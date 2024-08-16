import Link from "next/link"

export default function ThirdNotFound({ children }) {
    return (
        <div>
            <h1>(inside Third) 404</h1>
            <Link href="/second">to second</Link>
        </div>        
    )
}
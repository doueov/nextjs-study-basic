import Link from "next/link"

export default function GlobalNotFound({ children }) {
    return (
        <div>
            <h1>Global 404</h1>
            <Link href="/">to home</Link>
        </div>
    )
}
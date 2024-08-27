// 일단 신경쓰지 말 것
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function LinkDemoPage() {
    const path = usePathname()
    // 현재 주소 정보 출력
    console.log(path)
    const links = [
        { href: "/second", description: "to second" },
        { href: "/second/third", description: "to third" },
        { href: "/link_demo", description: "to link demo" },
    ]

    return (
        <ul>
            {
                links.map(link => <li><Link
                    href={link.href}
                    style={path === link.href ?
                        { color: "red", fontWeight: "bold", textDecoration: "underline" } :
                        { color: "blue", textDecoration: "none" }}>
                    {link.description}
                </Link></li>)
            }
        </ul>
    )
}
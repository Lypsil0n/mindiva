"use client"
import Link from "next/link"

export default function Navbar() {
    const navItems = [
        {"name": "Tips", "href": "/tips"},
        {"name": "Frågor", "href": "/fragor"},
        {"name": "Hjälp", "href": "/hjalp"},
        {"name": "Shop", "href": "/shop"}
    ]

    return (
        <div>
            <ul>
                <li className="float-left mr-2">
                    <a href={navItems[0].href}>{navItems[0].name}</a>
                </li>

                <li className="float-left mr-2">
                    <a href={navItems[1].href}>{navItems[1].name}</a>
                </li>

                <li className="float-left mr-2">
                    <a href={navItems[2].href}>{navItems[2].name}</a>
                </li>
                                
                <li className="float-left mr-2">
                    <a href={navItems[3].href}>{navItems[3].name}</a>
                </li>
            </ul>
        </div>
    )
}
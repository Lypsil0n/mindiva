"use client"
import Link from "next/link"

export default function Navbar() {
    const navItems = [
        {"name": "Hem", "href": "/"},
        {"name": "Hitta psykolog", "href": "/hitta-psykolog"},
        {"name": "Så fungerar det", "href": "/sa-fungerar-det"},
        {"name": "Stödlinjer", "href": "/stodlinjer"},
        {"name": "För psykologer", "href": "for-psykologer"}
    ]

    return (
        <div>
            <ul>
                <li className="float-left mr-2">
                    <a href={navItems[0].href}>Hem</a>
                </li>

                <li className="float-left mr-2">
                    <a href={navItems[1].href}>Hitta psykolog</a>
                </li>

                <li className="float-left mr-2">
                    <a href={navItems[2].href}>Så fungerar det</a>
                </li>
                                
                <li className="float-left mr-2">
                    <a href={navItems[3].href}>Stödlinjer</a>
                </li>

                <li className="float-left mr-2">
                    <a href={navItems[4].href}>För psykologer</a>
                </li>
            </ul>
        </div>
    )
}
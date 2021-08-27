import React from "react"
import { Logo } from "./Logo"
import { GlobalFilter } from "./GlobalFilter"
import "./Header.css"

const Header = ({ }) => {
    return (
        <div className="header">
            <Logo />
            <GlobalFilter />
        </div>
    )
}

export { Header }
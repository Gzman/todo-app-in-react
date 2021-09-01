import React from "react"
import { SiTodoist } from "react-icons/si"
import "./Header.css"

const Logo = () => {
    return (
        <div className="header-logo">
            <SiTodoist className="logo-icon" />
            <h1 className="logo">Todo App</h1>
        </div>
    )
}

export { Logo }
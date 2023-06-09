import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import './layout.css';
export default function Layout() {
    return (
        <div className="layout">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}
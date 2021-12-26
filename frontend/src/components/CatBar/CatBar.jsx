import React from 'react'
import { Link } from "react-router-dom"


export default function CatBar() {
    return (
        <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <Link className="p-2 link-secondary" to="/category/world">World</Link>
                    <Link className="p-2 link-secondary" to="/category/environment">Environment</Link>
                    <Link className="p-2 link-secondary" to="/category/technology">Technology</Link>
                    <Link className="p-2 link-secondary" to="/category/design">Design</Link>
                    <Link className="p-2 link-secondary" to="/category/culture">Culture</Link>
                    <Link className="p-2 link-secondary" to="/category/business">Business</Link>
                    <Link className="p-2 link-secondary" to="/category/politics">Politics</Link>
                    <Link className="p-2 link-secondary" to="/category/opinion">Opinion</Link>
                    <Link className="p-2 link-secondary" to="/category/science">Science</Link>
                    <Link className="p-2 link-secondary" to="/category/health">Health</Link>
                    <Link className="p-2 link-secondary" to="/category/style">Style</Link>
                    <Link className="p-2 link-secondary" to="/category/travel">Travel</Link>
                </nav>
            </div>
    )
}

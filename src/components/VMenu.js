import React from 'react'
import { Link } from 'gatsby'
function VMenu() {
    return (
        <div className="v-menu d-flex flex-column justify-content-center align-items-center">
            <Link to="/">
                <div className="logo mb-5">
                    <span>R</span>
                </div>
            </Link>
            <nav>
                <a rel="noopener noreferrer" href="https://www.youtube.com/KingRayhan" target="_blank">
                    Youtube
                </a>

                <span className="line" />

                <a rel="noopener noreferrer" href="https://github.com/kingRayhan" target="_blank">
                    Github
                </a>

                <span className="line" />

                <a rel="noopener noreferrer" href="https://www.facebook.com/kingrayhan2" target="_blank">
                    Facebook
                </a>

                <span className="line" />
                <Link to="/articles">Articles</Link>
            </nav>
        </div>
    )
}

export default VMenu

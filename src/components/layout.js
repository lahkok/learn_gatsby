import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>
                            Home
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/author" className={navLinkText}>
                            Author
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/read-csv" className={navLinkText}>
                            CSV
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/crud" className={navLinkText}>
                            CRUD
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout
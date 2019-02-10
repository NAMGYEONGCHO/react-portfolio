import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
const Navbar = (props) => {
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><NavLink to="/todo">To-do list</NavLink></li>
                    <li><NavLink to="/buttons">Buttons</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);
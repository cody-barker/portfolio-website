import {NavLink} from 'react-router-dom'

function NavBar() {
    return(
        <nav>
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </nav>
    )
}

export default NavBar
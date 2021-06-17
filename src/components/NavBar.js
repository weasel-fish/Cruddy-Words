import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/search">Search</NavLink>
            <NavLink to="/addword">Add Word</NavLink>
            <NavLink to="/mywords">My Words</NavLink>
            <NavLink to="/login">Login</NavLink>
        </div>
    )
}

export default NavBar
import { NavLink } from 'react-router-dom'

function NavBar({user, handleLogout}) {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/search">Search</NavLink>
            <NavLink to={user === '' ? "/login" :"/addword"}>Add Word</NavLink>
            <NavLink to={user === '' ? "/login" :"/mywords"}>My Words</NavLink>
            {user === '' ? <NavLink to="/login">Login</NavLink> : <div>You are logged in as {user.name}<button onClick={handleLogout}>Logout</button></div>}
        </div>
    )
}

export default NavBar
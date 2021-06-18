import { NavLink } from 'react-router-dom'

function NavBar({user, handleLogout}) {
    return (
        <div id="navbar">
            <NavLink className="links" to="/">Home</NavLink>
            <NavLink className="links" to="/search">Search</NavLink>
            <NavLink className="links" to={user === '' ? "/login" :"/addword"}>Add Word</NavLink>
            <NavLink className="links" to={user === '' ? "/login" :"/mywords"}>My Words</NavLink>
            {user === '' ? <div className="right"><NavLink  className="login" to="/login">Login</NavLink></div> : <div className="right"><div className="name">You are logged in as {user.name}</div><button className="login" onClick={handleLogout}>Logout</button></div>}
        </div>
    )
}

export default NavBar
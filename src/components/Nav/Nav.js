import './Nav.scss'
import { NavLink } from 'react-router-dom'
function Nav() {
    return (
        <div className="topnav">
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/covid">Covid</NavLink>
            <NavLink to="/todo">Todo</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/countdown">Count Down</NavLink>
            <NavLink to="/youtube">Youtube Search</NavLink>
        </div>
    )
}

export default Nav
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../../context/auth'
import { GiExitDoor } from 'react-icons/gi'
import style from './Navbar.module.scss'

export function Navbar() {
  const { user, logout } = useContext(AuthContext)
  const activeStyle = {
    backgroundColor: 'white',
  }
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          {user ? (
            <NavLink
              to="/Profile"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Perfil
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Login ou Cadastre-se
            </NavLink>
          )}
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sobre
          </NavLink>
        </li>

        {user && (
          <li onClick={logout}>
            <>
              <GiExitDoor /> Logout
            </>
          </li>
        )}
      </ul>
    </nav>
  )
}

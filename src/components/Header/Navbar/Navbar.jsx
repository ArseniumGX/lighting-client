import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/auth'
import { GiExitDoor } from 'react-icons/gi'

export function Navbar() {
  const { user, logout } = useContext(AuthContext)
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/login">Login ou Cadastre-se</Link>
        </li> */}
        <li>
          {user ? (
            <Link to="/Profile">Perfil</Link>
          ) : (
            <Link to="/login">Login ou Cadastre-se</Link>
          )}
        </li>
        <li>{user && <GiExitDoor onClick={logout} />}</li>
      </ul>
    </nav>
  )
}

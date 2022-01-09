import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="login">Login ou Cadastre-se</Link>
        </li>
      </ul>
    </nav>
  )
}

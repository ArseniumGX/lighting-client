import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="cadastro">Cadastrar</Link>
        </li>
      </ul>
    </nav>
  )
}

import { Navbar } from './Navbar/Navbar'
import style from './Header.module.scss'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth'

export function Header() {
  const { user } = useContext(AuthContext)

  return (
    <header>
      <div className={style.logo}>
        <img
          src="https://www.gitbook.com/cdn-cgi/image/width=40,height=40,fit=contain,dpr=1,format=auto/https%3A%2F%2Fblueedtech.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-28427.appspot.com%2Fo%2Fspaces%252F-Mi99jjCn0YFUe30kpPL%252Favatar-1630153945952.png%3Fgeneration%3D1630153946259990%26alt%3Dmedia"
          alt="Blue EdTech alt logo"
        />
        <h1>Lighting Library</h1>
      </div>
      {user && (
        <div className={style.wellcome}>
          Olá,
          <span>
            <br />
            {user.name}
          </span>
        </div>
      )}
      <Navbar />
    </header>
  )
}

import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from '../../components'
import { Card } from './Card/Card'
import style from './Profile.module.scss'
import image from '../../assets/default-avatar.png'
import { AuthContext } from '../../context/auth'

function Profile() {
  const { user, logout } = useContext(AuthContext)
  const [books, setBooks] = useState([])
  const [mounted, setMounted] = useState(false)

  const loadBooks = async (e) => {
    const list = await axios.get('/user/bookshelf').then((res) => res)
    setBooks(list.data)
    setMounted(true)
  }

  useEffect(() => {
    loadBooks()
  }, [mounted])

  return (
    <section className={style.profile}>
      <h2>Meu Perfil</h2>
      <div className={style.profile__info} id={user.id}>
        <div className={style.profile__info__image}>
          <img src={user.avatar || image} alt={`${user.name}'s avatar`} />
        </div>
        <span>{user.name || ''}</span>
        <span>{user.email || ''}</span>
        <Button value={'Logout'} onClick={logout} />
      </div>

      <div className={style.profile__favorite}>
        {mounted &&
          books.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              cover={item.cover}
              id={item.id}
            />
          ))}
      </div>
    </section>
  )
}

export { Profile }

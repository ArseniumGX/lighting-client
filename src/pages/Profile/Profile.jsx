import { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import defaultImg from '../../assets/default-avatar.png'
import style from './Profile.module.scss'

export function Profile() {
  const { user } = useContext(AuthContext)

  return (
    <section className={style.profile}>
      <main>
        {console.log(user)}
        <img src={user.avatar | defaultImg} alt={`${user.name} foto`} />
        <span>{user.name}</span>
        <span>{user.gender}</span>
        <span>{user.birthdate}</span>
        <span>{user.email}</span>
        <span>{user.phone}</span>
      </main>
    </section>
  )
}

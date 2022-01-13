import { useContext } from 'react'
import { AuthContext } from '../../context/auth'

export function Profile() {
  const { user } = useContext(AuthContext)

  return (
    <section>
      <h1>{console.log(user)}</h1>
    </section>
  )
}

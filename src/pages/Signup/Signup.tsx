import { ReactEventHandler, useState } from 'react'
import { Input } from '../../components'

interface IUser {
  fullname: string
  birthdate: string
  email: string
  password: string
}

function Signup(): JSX.Element {
  const [user, setUser] = useState<IUser>({})

  const handleFields: ReactEventHandler = (e) => {
    const aux = 0
  }

  return (
    <section>
      <form>
        <Input
          id="fullname"
          name="fullname"
          required
          title="Nome Completo"
          type="text"
          value={user.fullname}
          onChange={handleFields}
        />
      </form>
    </section>
  )
}

export { Signup }

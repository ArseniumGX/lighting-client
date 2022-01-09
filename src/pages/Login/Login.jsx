import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEdit, FaUser } from 'react-icons/fa'
import style from './Login.module.scss'
import { Button, Input } from '../../components'

export function Login() {
  const [user, setUser] = useState({})
  const [cademail, setCademail] = useState('')
  const navigate = useNavigate()

  const handleUser = (e) => {
    const aux = { ...user }

    aux[e.target.name] = e.target.value

    setUser(aux)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(JSON.stringify(user))
  }

  const makeAccount = (e) => {
    if (cademail) {
      navigate('/register', { state: { email: cademail } })
    }
  }

  return (
    <section className={style.login}>
      <span className={style.login__header}>
        Faça seu login ou crie uma conta caso ainda não seja cadastrado
      </span>

      <div className={style.login__frame}>
        <div className={style.login__frame__signin}>
          <h3>
            <FaUser /> Já é cadastrado ?
          </h3>
          <hr />
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              value={user.email}
              name="email"
              placeholder="E-mail"
              onChange={handleUser}
            />
            <Input
              type="password"
              value={user.passpord}
              name="password"
              placeholder="Senha"
              onChange={handleUser}
            />
            <Button value="Prosseguir" />
          </form>
        </div>

        <div className={style.login__frame__signup}>
          <h3>
            <FaEdit /> Ainda não possui uma conta ?
          </h3>
          <hr />
          <span>Digite seu email para continuar</span>
          <div>
            <Input
              type="email"
              value={cademail}
              name="cademail"
              placeholder="E-mail"
              onChange={(e) => setCademail(e.target.value)}
            />
          </div>
          <Button onClick={makeAccount} value="Cadastrar" />
        </div>
      </div>
    </section>
  )
}

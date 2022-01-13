import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEdit, FaUser } from 'react-icons/fa'
import style from './Login.module.scss'
import { Button, Input } from '../../components'
import { AuthContext } from '../../context/auth'

export function Login() {
  const [credential, setCredential] = useState({})
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const handleUser = (e) => {
    const aux = { ...credential }

    aux[e.target.name] = e.target.value

    setCredential(aux)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const bug = await login(credential)

    if (!bug) navigate('/')
  }

  const makeAccount = (e) => {
    if (email) {
      navigate('/register', { state: { email } })
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
              value={credential.email}
              name="email"
              placeholder="E-mail"
              onChange={handleUser}
              required={true}
            />
            <Input
              type="password"
              value={credential.passpord}
              name="password"
              placeholder="Senha"
              onChange={handleUser}
              required={true}
            />
            <div>
              <Button value="Prosseguir" />
            </div>
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
              value={email}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
          </div>
          <div>
            <Button onClick={makeAccount} value="Cadastrar" />
          </div>
        </div>
      </div>
    </section>
  )
}

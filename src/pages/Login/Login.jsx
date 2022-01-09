import {} from 'react'
import {} from 'react-router-dom'
import { FaEdit, FaUser } from 'react-icons/fa'
import style from './Login.module.scss'
import { Input } from './Input/Input'

export function Login() {
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
          <Input type="email" value={null} name="email" placeholder="E-mail" />
          <Input
            type="password"
            value={null}
            name="password"
            placeholder="Senha"
          />
        </div>
        <div className={style.login__frame__signup}>
          <h3>
            <FaEdit /> Ainda não possui uma conta ?
          </h3>
          <hr />
          <span>Digite seu email para continuar</span>
          <Input
            type="email"
            value={null}
            name="cademail"
            placeholder="E-mail"
          />
        </div>
      </div>
    </section>
  )
}

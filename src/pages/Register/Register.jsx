import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { HiMail, HiUserCircle, HiKey, HiIdentification } from 'react-icons/hi'
import style from './Register.module.scss'
import { Button, InputLeftLabel, InputUpperLabel } from '../../components'
import axios from 'axios'

export function Register() {
  const [user, setUser] = useState({})
  const location = useLocation()
  const navigator = useNavigate()

  const handleFields = (e) => {
    const aux = { ...user }
    aux[e.target.name] = e.target.value
    setUser(aux)
  }

  const sendUser = async (e) => {
    e.preventDefault()

    if (
      user.email !== user.emailConfirm ||
      user.password !== user.passwordConfirm
    ) {
      alert('Dados não confere')
      return
    }

    delete user.emailConfirm

    await axios.post('/user', user)

    navigator('/login', { replace: null })
  }

  useEffect(() => {
    setUser({ email: location.state.email })
  }, [])

  return (
    <section className={style.register}>
      <form onSubmit={sendUser}>
        <div className={style.register__accessInfo}>
          <span>
            <HiUserCircle />
            Dados de acesso
          </span>
          <div className={style.register__accessInfo__box}>
            <InputUpperLabel
              id="email"
              type="email"
              value={user.email || ''}
              name="email"
              onChange={handleFields}
              disabled={true}
              label={
                <>
                  <HiMail /> Email
                </>
              }
            />
            <InputUpperLabel
              id="email-confirm"
              type="email"
              value={user.emailConfirm || ''}
              name="emailConfirm"
              onChange={handleFields}
              required={true}
              label="Confirme o e-mail"
            />
          </div>
          <div className={style.register__accessInfo__box}>
            <InputUpperLabel
              id="password"
              type="password"
              value={user.password || ''}
              name="password"
              required={true}
              onChange={handleFields}
              label={
                <>
                  <HiKey /> Senha
                </>
              }
            />
            <InputUpperLabel
              id="passord-confirm"
              type="password"
              value={user.passwordConfirm || ''}
              name="passwordConfirm"
              onChange={handleFields}
              label="Confirma a senha"
              required={true}
            />
          </div>
        </div>

        <div className={style.register__personalInfo}>
          <span>
            <HiIdentification />
            Informações Pessoais
          </span>
          <div>
            <InputLeftLabel
              id="name"
              type="text"
              value={user.name || ''}
              name="name"
              onChange={handleFields}
              label="Nome"
              placeholder="Nome Completo"
            />
          </div>
          <div>
            <InputLeftLabel
              id="avatar"
              type="text"
              value={user.avatar || ''}
              name="avatar"
              onChange={handleFields}
              label="Foto de perfil"
            />
          </div>
          <div>
            <InputLeftLabel
              id="name"
              type="date"
              value={user.birthdate || ''}
              name="birthdate"
              onChange={handleFields}
              label="Data de nascimento"
            />
          </div>
          <div className={style.register__personalInfo__genderBox}>
            <label htmlFor="gender">Gênero</label>
            <select
              name="gender"
              id="gender"
              onChange={(e) =>
                setUser({ ...user, gender: e.currentTarget.value })
              }
            >
              <option value=""></option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>
          </div>
          <div>
            <InputLeftLabel
              id="phone"
              type="telephone"
              value={user.phone || ''}
              name="phone"
              label="Telefone"
              onChange={handleFields}
            />
          </div>
        </div>
        <div className={style.register__buttons}>
          <Button type="submit" value="Cadastrar" />
          <Button
            type="click"
            value="Cancelar"
            onClick={(e) => {
              e.preventDefault()
              navigator('/login', { replace: true })
            }}
          />
        </div>
      </form>
    </section>
  )
}

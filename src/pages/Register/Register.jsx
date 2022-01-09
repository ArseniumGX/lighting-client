import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { HiMail, HiUserCircle, HiKey, HiIdentification } from 'react-icons/hi'
import style from './Register.module.scss'
import { Input, Button } from '../../components'

export function Register() {
  const [user, setUser] = useState({})
  const location = useLocation()

  const handleFields = (e) => {
    const aux = { ...user }
    aux[e.target.name] = e.target.value
    setUser(aux)
  }

  const sendUser = async (e) => {
    e.preventDefault()

    console.info(user)
  }

  useEffect(() => {
    setUser({ email: location.state.email })
  }, [])

  return (
    <section className={style.register}>
      <form onSubmit={sendUser}>
        <div className={style.register__access_info}>
          <span>
            <HiUserCircle />
            Dados de acesso
          </span>
          <div className={style.register__access_info__box}>
            <Input
              id="email"
              type="email"
              value={user.email || ''}
              name="email"
              onChange={handleFields}
              label={
                <>
                  <HiMail /> Email
                </>
              }
            />
            <Input
              id="email-confirm"
              type="email"
              value={user.emailConfirm || ''}
              name="emailConfirm"
              onChange={handleFields}
              label="Confirme o e-mail"
            />
          </div>
          <div className={style.register__access_info__box}>
            <Input
              id="password"
              type="password"
              value={user.password || ''}
              name="password"
              onChange={handleFields}
              label={
                <>
                  <HiKey /> Senha
                </>
              }
            />
            <Input
              id="passord-confirm"
              type="password"
              value={user.passwordConfirm || ''}
              name="passwordConfirm"
              onChange={handleFields}
              label="Confirma a senha"
            />
          </div>
        </div>

        <div className={style.register__personal_info}>
          <span>
            <HiIdentification />
            Informações Pessoais
          </span>
          <div>
            <Input
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
            <Input
              id="avatar"
              type="text"
              value={user.avatar || ''}
              name="avatar"
              onChange={handleFields}
              label="Foto de perfil"
            />
          </div>
          <div>
            <Input
              id="name"
              type="date"
              value={user.birthdate || ''}
              name="birthdate"
              onChange={handleFields}
              label="Data de nascimento"
            />
          </div>
          <div className={style.regiter__personal_info__gender_box}>
            <label>Gênero</label>
            <div>
              <Input
                id="m"
                type="radio"
                value="Masculino"
                name="gender"
                label="Masculino"
                onChange={handleFields}
              />
              <Input
                id="f"
                type="radio"
                value="Feminino"
                name="gender"
                label="Feminino"
                onChange={handleFields}
              />
            </div>
          </div>
          <div>
            <Input
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
          <Button type="click" value="Cancelar" />
        </div>
      </form>
    </section>
  )
}

import { useState } from 'react'
import { Input, Button } from '../../components'
import axios from 'axios'
import style from './Register.module.scss'

export function Register() {
  const [user, setUser] = useState({})

  const handleFields = (e) => {
    const aux = { ...user }
    aux[e.target.name] = e.target.value
    setUser(aux)
  }

  const sendUser = async (e) => {
    e.preventDefault()

    await axios
      .post('user', user)
      .then((res) => {
        console.log(res)
        setUser({})
      })
      .catch((error) => {
        if (error.response.status === 406) alert(error.response.data.message)
        else if (error.response.status === 409)
          alert(error.response.data.message)
        else console.error(error.message)
      })
  }

  return (
    <section className={style.register}>
      <form onSubmit={sendUser}>
        <Input
          title="Nome Completo"
          id="fullname"
          type="text"
          name="fullname"
          value={user.fullname || ''}
          onChange={handleFields}
          required={false}
        />
        <Input
          title="Data de Nascimento"
          id="birthdate"
          type="date"
          name="birthdate"
          value={user.birthdate || ''}
          onChange={handleFields}
          required={false}
        />
        <Input
          title="Nickname"
          id="nickname"
          type="text"
          name="nickname"
          value={user.nickname || ''}
          onChange={handleFields}
          required={true}
        />
        <Input
          title="URL Imagem"
          id="imageUrl"
          type="url"
          name="imageUrl"
          value={user.imageUrl || ''}
          onChange={handleFields}
          required={false}
        />
        <Input
          title="Email"
          id="email"
          type="email"
          name="email"
          value={user.email || ''}
          onChange={handleFields}
          required={true}
        />
        <Input
          title="Senha"
          id="password"
          type="password"
          name="password"
          value={user.password || ''}
          onChange={handleFields}
          required={true}
        />
        <Input
          title="Confirmação de Senha"
          id="passwordConfirm"
          type="password"
          name="passwordConfirm"
          value={user.passwordConfirm || ''}
          onChange={handleFields}
          required={true}
        />
        <Button value="Cadastrar" />
      </form>
    </section>
  )
}

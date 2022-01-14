import { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const logout = () => {
    setUser(null)
    localStorage.removeItem('token')
    navigate('/')
  }

  const login = async (credentials) => {
    const response = await axios
      .post('/auth/login', credentials)
      .then((res) => res.data)
      .catch((err) => err)

    if (response.request) {
      alert('Credeciais inválidas.')
      return response.request
    }

    localStorage.setItem('token', response.token)
    setUser(response.user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      axios.get('/auth/profile').then((res) => setUser(res.data))
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

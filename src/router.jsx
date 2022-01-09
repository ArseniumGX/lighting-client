import { Routes, Route } from 'react-router-dom'
import { Register, Home, Book, Login } from './pages'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="book" element={<Book></Book>} />
    </Routes>
  )
}

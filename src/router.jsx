import { Routes, Route } from 'react-router-dom'
import { Register, Home, Book, Login, About, NotFound, Profile } from './pages'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="book" element={<Book />} />
      <Route path="profile" element={<Profile></Profile>} />
      <Route path="about" element={<About></About>} />
      <Route path="*" element={<NotFound></NotFound>} />
    </Routes>
  )
}

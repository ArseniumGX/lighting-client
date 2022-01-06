import { Routes, Route } from 'react-router-dom'
import { Register, Home } from './pages'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cadastro" element={<Register />} />
    </Routes>
  )
}

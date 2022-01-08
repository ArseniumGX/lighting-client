import { useLocation } from 'react-router-dom'

export function Book() {
  const location = useLocation()

  return <section>book {location.state.id}</section>
}

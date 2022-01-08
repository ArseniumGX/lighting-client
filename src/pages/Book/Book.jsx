import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import data from '../../book.json'
import style from './Book.module.scss'

export function Book() {
  const location = useLocation()
  const navigate = useNavigate()
  const [book, setBook] = useState({})

  const loadBook = () => {
    const id = location.state.id
    if (!id) navigate('/')
    setBook(data[id])
  }

  useEffect(() => {
    loadBook()
  }, [])

  return (
    <section className={style.book}>
      <img src={book.cover || ''} alt="" />
      <div>{console.log(book)}</div>
    </section>
  )
}

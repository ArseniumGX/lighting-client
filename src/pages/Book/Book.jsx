import axios from 'axios'
import { useEffect, useState } from 'react'
import { BsBookmarkHeart } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom'
import style from './Book.module.scss'

export function Book() {
  const location = useLocation()
  const navigate = useNavigate()
  const [book, setBook] = useState({})
  const [mounted, setMounted] = useState(false)
  const id = location.state.id

  const loadBook = async () => {
    if (!id && id !== 0) navigate('/')
    await axios.get(`/book/${id}`).then((res) => setBook(res.data))
    setMounted(true)
  }

  const favorit = async () => {}

  useEffect(() => {
    loadBook()
  }, [mounted])

  return (
    <section className={style.book}>
      {console.log(book)}
      <img src={book.cover || ''} alt="" />
      <div className={style.book__content}>
        <h3>{book.title}</h3>
        <div>
          <strong>Sinopse</strong>
          <p>{book.synopsis}</p>
        </div>

        <div className={style.book__content__metainfo}>
          <p onClick={favorit}>
            <BsBookmarkHeart />
          </p>
          <span>
            <strong>Preço: </strong>
            R$ {Number(book.price).toFixed(2)}
          </span>
          <span>
            <strong>Autor(a): </strong>
            {book.author}
          </span>
          <span>
            <strong>Editora: </strong>
            {book.publisher}
          </span>
          <span>
            <strong>Lançamento: </strong>
            {book.year}
          </span>
          <span>
            <strong>Páginas: </strong>
            {book.pages}
          </span>
        </div>
      </div>
    </section>
  )
}

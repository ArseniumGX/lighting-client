import axios from 'axios'
import { useEffect, useState } from 'react'
import { BsBookmarkHeart, BsBookmarkDash } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom'
import data from '../../book.json'
import style from './Book.module.scss'

export function Book() {
  const location = useLocation()
  const navigate = useNavigate()
  const [book, setBook] = useState({})

  const loadBook = async () => {
    const id = location.state.id
    if (!id && id !== 0) navigate('/')
    setBook(data[id])

    // await axios.get(`/book/${id}`).then((res) => setBook(res.data))
  }

  useEffect(() => {
    loadBook()
  }, [])

  return (
    <section className={style.book}>
      {console.log(book)}
      <img src={book.cover || ''} alt="" />
      <div className={style.book__content}>
        <h3>{book.title}</h3>
        <div>
          <strong>Sinopse</strong>
          <p>{book.resume}</p>
        </div>

        <div className={style.book__content__metainfo}>
          <p>
            <BsBookmarkHeart />
            <BsBookmarkDash />
          </p>
          <span>
            <strong>Preço: </strong>
            R$ {Number(book.value).toFixed(2)}
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
            {book.release}
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

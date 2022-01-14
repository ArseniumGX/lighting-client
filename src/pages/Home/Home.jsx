import { useEffect, useState } from 'react'
import style from './Home.module.scss'
import axios from 'axios'
import { Card } from '../../components'

export function Home() {
  const [books, setBooks] = useState([])
  const [mounted, setMounted] = useState(false)

  const loadBooks = async () => {
    await axios
      .get('/book')
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err))
    setMounted(true)
  }

  useEffect(() => {
    loadBooks()
  }, [mounted])

  return (
    <section className={style.home}>
      {books.map((book, index) => (
        <Card
          key={index}
          title={book.title}
          price={book.price}
          cover={book.cover}
          id={book.id}
        />
      ))}
    </section>
  )
}

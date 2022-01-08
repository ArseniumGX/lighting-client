import { Card } from '../../components'
import data from '../../book.json'
import { useEffect, useState } from 'react'
import style from './Home.module.scss'

export function Home() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    setBooks(data)
  }, [])

  return (
    <section className={style.home}>
      {books.map((book, index) => (
        <Card
          key={index}
          title={book.title}
          price={book.value}
          cover={book.cover}
          id={index}
        />
      ))}
    </section>
  )
}

import { useNavigate } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'
import style from './Card.module.scss'

export function Card(props) {
  const navigate = useNavigate()

  const clickCard = () => {
    navigate('book', { state: { id: props.id } })
  }

  const addCart = () => {}

  return (
    <div className={style.card}>
      <img
        src={props.cover || ''}
        alt={props.title || ''}
        onClick={clickCard}
      />
      <span className={style.card__title} onClick={clickCard}>
        {props.title || ''}
      </span>
      <span className={style.card__price} onClick={clickCard}>
        R$ {props.price || ''}
      </span>
      <span className={style.card__icon} onClick={addCart}>
        <FaCartPlus />
      </span>
    </div>
  )
}

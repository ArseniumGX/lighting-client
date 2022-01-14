import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsBookmarkHeart } from 'react-icons/bs'
import style from './Card.module.scss'
import { AuthContext } from '../../context/auth'
import axios from 'axios'

export function Card(props) {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)

  const clickCard = () => {
    navigate('book', { state: { id: props.id } })
  }

  const addWish = async () => {
    await axios.patch(`user/toggle-book/${props.id}`)
  }

  return (
    <div className={style.card}>
      <div className={style.card__top}>
        <img
          src={props.cover || ''}
          alt={props.title || ''}
          onClick={clickCard}
        />
        <span className={style.card__top__title} onClick={clickCard}>
          {props.title || ''}
        </span>
      </div>
      <div className={style.card__bottom}>
        <span className={style.card__bottom__price} onClick={clickCard}>
          R$ {Number(props.price).toFixed(2) || ''}
        </span>
        {user && (
          <span className={style.card__bottom__icon} onClick={addWish}>
            <BsBookmarkHeart />
          </span>
        )}
      </div>
    </div>
  )
}

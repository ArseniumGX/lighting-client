import { BsBookmarkDash } from 'react-icons/bs'
import style from './Card.module.scss'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Card(props) {
  const navigate = useNavigate()

  const clickCard = () => {
    navigate('book', { state: { id: props.id } })
  }

  const removeWish = async (e) => {
    await axios
      .patch(`user/toggle-book/${props.id}`)
      .then((res) => console.log(res))
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
        <span className={style.card__bottom__icon} onClick={removeWish}>
          <BsBookmarkDash />
        </span>
      </div>
    </div>
  )
}

export { Card }

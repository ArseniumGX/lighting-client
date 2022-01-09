import { Fragment } from 'react'
import style from './Input.module.scss'

export function Input(props) {
  return (
    <Fragment>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className={style.input}
        id={props.id}
        type={props.type}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        disabled={props.disabled}
      />
    </Fragment>
  )
}

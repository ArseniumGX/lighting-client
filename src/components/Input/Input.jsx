import { Fragment } from 'react'
import style from './Input.module.scss'

export function Input(props) {
  return (
    <Fragment>
      <input
        className={style.input}
        id={props.id}
        type={props.type}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        disabled={props.disabled}
        required={props.required}
      />
    </Fragment>
  )
}

export function InputUpperLabel(props) {
  return (
    <div className={style.topLabel}>
      <label htmlFor={props.id}>{props.label}</label>
      <Input
        id={props.id}
        type={props.type}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        disabled={props.disabled}
        required={props.required}
      />
    </div>
  )
}

export function InputLeftLabel(props) {
  return (
    <div className={style.leftLabel}>
      <label htmlFor={props.id}>{props.label}</label>
      <Input
        id={props.id}
        type={props.type}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        disabled={props.disabled}
        required={props.required}
      />
    </div>
  )
}

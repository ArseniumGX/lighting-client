import { ChangeEventHandler, Fragment } from 'react'
import style from './Input.module.scss'

interface IElement {
  id: string
  name: string
  title: string
  type: string
  value: string
  onChange: ChangeEventHandler
  required: boolean
}

function Input(props: IElement): JSX.Element {
  return (
    <Fragment>
      <div className={style.container}>
        <label htmlFor={props.id}>{props.title}</label>
        <input
          id={props.id}
          type={props.type}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          required={props.required}
        />
      </div>
    </Fragment>
  )
}

export { Input }

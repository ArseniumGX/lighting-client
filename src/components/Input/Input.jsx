import style from './Input.module.scss'

export function Input(props) {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className={style.input}
        type={props.type}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </>
  )
}

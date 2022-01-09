import style from './Input.module.scss'

export function Input(props) {
  return (
    <>
      <input
        className={style.input}
        type={props.type}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
      />
    </>
  )
}

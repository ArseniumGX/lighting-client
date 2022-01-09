import style from './Button.module.scss'

function Button(props) {
  return (
    <>
      <div className={style.button}>
        <button onClick={props.onClick} type={props.type}>
          {props.value}
        </button>
      </div>
    </>
  )
}

export { Button }

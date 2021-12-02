import stl from "./dialog.module.css"
import logo from "../../../../img/7h_xRpycDaI.jpg"

const Dialog = (props) => {
  return (
    <div className={stl.dialog}>
      <div className={stl.logo}><img src={logo} alt={props.name}/></div>
      <div className={stl.inner}>
        <div className={stl.info}>
          <div className={stl.name}>{props.name}</div>
          <div className={stl.date}>{props.date}</div>
        </div>
        <div className={stl.message}>{props.message}</div>
      </div>
    </div>
  )
}

export default Dialog
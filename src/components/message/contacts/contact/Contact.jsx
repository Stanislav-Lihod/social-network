import stl from "./contact.module.css"
import logo from "../../../../img/7h_xRpycDaI.jpg"
import { NavLink } from "react-router-dom"

const Contact = (props) => {
  return (
    <NavLink to={props.url} activeClassName={stl.active} className={stl.contact}>
      <div className={stl.logo}><img src={logo}/></div>
      <div className={stl.inner}>
        <div className={stl.info}>
          <div className={stl.name}>{props.name}</div>
          <div className={stl.date}>{props.date}</div>
        </div>
        <div className={stl.message}>{props.message}</div>
      </div>
    </NavLink>
  )
}

export default Contact
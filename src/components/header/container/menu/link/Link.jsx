import stl from "./link.module.css";
import rss from "../../../../../img/rss.svg"
import { NavLink } from "react-router-dom";

const Link = (props) => {
  return (
    <NavLink to={props.path} activeClassName={stl.active} className={stl.link}>
      <div className={stl.linkIcon}><img src={rss} alt=""></img></div>
      <div className={stl.linkText}>{props.name}</div>
    </NavLink>
  )
}
export default Link;
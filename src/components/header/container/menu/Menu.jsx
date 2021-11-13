import Link from "./link/Link";
import stl from "./menu.module.css";

const Menu = (props) => {
  const menuLink = props.links.map( el => <Link key={el.id} name={el.name} path={el.path} logo={el.logo}/>)

  return (
    <div className={stl.links}>
     {menuLink}
    </div>
  )
}
export default Menu;
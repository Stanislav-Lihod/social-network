import Link from "./link/Link";
import stl from "./menu.module.css";

const Menu = () => {
  return (
    <div className={stl.links}>
     <Link name="feed" path="/wall"/>
     <Link name="network" path="/network"/>
     <Link name="jobs" path="/jobs"/>
     <Link name="chat" path="/message"/>
     <Link name="notises" path="/notises"/>
    </div>
  )
}
export default Menu;
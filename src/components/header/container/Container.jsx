
import Menu from "./menu/Menu"
import Profile from "./profile/Profile";
import Search from "./search/Search";
import stl from "./container.module.css";

const Container = () => {
  return (
    <div className={stl.container}>
      <Menu />
      <Search />
      <Profile name="S.LIHI" allViews="200" todayViews="33"/>
    </div>
  )
}

export default Container;
import Profile from "./profile/Profile";
import Search from "./search/Search";
import stl from "./container.module.css";
import MenuContainer from "./menu/MenuContainer";

const Container = () => {
  return (
    <div className={stl.container}>
      <MenuContainer />
      <Search />
      <Profile name="S.LIHI" allViews="200" todayViews="33"/>
    </div>
  )
}

export default Container;
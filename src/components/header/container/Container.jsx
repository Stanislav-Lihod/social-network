import Search from "./search/Search";
import stl from "./container.module.css";
import MenuContainer from "./menu/MenuContainer";
import ProfileContainer from "./profile/ProfileContainer";

const Container = () => {
  return (
    <div className={stl.container}>
      <MenuContainer />
      <Search />
      <ProfileContainer/>
    </div>
  )
}

export default Container;
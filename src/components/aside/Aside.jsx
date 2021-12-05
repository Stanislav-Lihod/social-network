import Button from "./button/Button"
import Profile from "./profile/Profile"
import Hashtag from "./hashtag/Hashtag"
import stl from "./aside.module.css"

const Aside = () =>{
  return(
    <div className={stl.container}>
      <Profile name="Stanislav" status="Front-end Developer"/>
      <Button />
      <Hashtag />
    </div>
  )
}

export default Aside
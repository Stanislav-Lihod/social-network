import logo from "../../../img/7h_xRpycDaI.jpg"
import stl from "./profile.module.css"

const Profile = (props) => {
  return (
    <div className={stl.profile}>
      <div className={stl.profileBg}></div>
      <div className={stl.profileText}>
        <div className={stl.profileText__name}>{props.name}</div>
        <div className={stl.profileText__profession}>{props.profession}</div>
      </div>
      <img src={logo} alt="logo" className={stl.profileLogo} />
    </div>
  )
}

export default Profile
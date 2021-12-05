import logo from "../../../img/7h_xRpycDaI.jpg"
import stl from "./profile.module.css"
import ProfileStatus from "./ProfileStatus"

const Profile = (props) => {
  return (
    <div className={stl.profile}>
      <div className={stl.profileBg}></div>
      <div className={stl.profileText}>
        <div className={stl.profileText__name}>{props.name}</div>
        <ProfileStatus status="Front End Developer"/>
      </div>
      <img src={logo} alt="logo" className={stl.profileLogo} />
    </div>
  )
}

export default Profile
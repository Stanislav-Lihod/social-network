import logo from "../../../../img/7h_xRpycDaI.jpg"
import stl from "./profile.module.css";

const Profile = (props) => {

  return (
    <a href={`/profile/${props.userId}`} className={stl.profile}>
      <div className={stl.profileLogo}><img src={logo} alt={props.name}></img></div>
      <div className={stl.profileText}>
        <div className={stl.profileText__name}>{props.name}</div>
        <div className={stl.profileText__views}>{props.allViews} views today <span>+{props.todayViews}</span></div>
      </div>
    </a>
  )
}
export default Profile;
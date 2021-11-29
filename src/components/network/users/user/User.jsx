import { NavLink } from 'react-router-dom'
import stl from './user.module.css'

const User = (props) => {
  return(
    <NavLink to={`/profile/${props.id}`} className={stl.userItem}>
      <div className={stl.userItem__logoProfile}>
        <div className={stl.userItem__bgLogo}><img src={props.bg} alt={props.name} /></div>
        <div className={stl.userItem__logo}><img src={props.logo} alt={props.name} /></div>
      </div>
      <div className={stl.userItem__info}>
        <div className={stl.userItem__name}>{props.name}</div>
        <div className={stl.userItem__prof}>{props.prof}</div>
      </div>
      {props.followed ? <button className={stl.userItem__unfollow} onClick={()=>{props.onFollowed(props.id)}}>Unfollow</button>: 
      <button className={stl.userItem__follow} onClick={()=>{ props.onUnfollowed(props.id)}}>Follow</button> }      
    </NavLink>
  )
}

export default User
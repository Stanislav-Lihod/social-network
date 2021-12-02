import { NavLink } from 'react-router-dom'
import stl from './user.module.css'

const User = (props) => {
  return(
    <div className={stl.userItem}>
      <NavLink to={`/profile/${props.id}`} className={stl.userItemLinks}>
        <div className={stl.userItem__logoProfile}>
          <div className={stl.userItem__logo}><img src={props.logo} alt={props.name} /></div>
        </div>
        <div className={stl.userItem__info}>
          <div className={stl.userItem__name}>{props.name}</div>
          <div className={stl.userItem__prof}>{props.prof}</div>
        </div>
      </NavLink>
      {props.followed ? 
      <button disabled={props.followingInProgress.includes(props.id)} className={stl.userItem__unfollow} onClick={()=>{ props.unfollowedThunk(props.id) }}>Unfollow</button>: 
      <button disabled={props.followingInProgress.includes(props.id)} className={stl.userItem__follow} onClick={()=>{ props.followedThunk(props.id) }}>Follow</button> }      
    </div>
  )
}

export default User
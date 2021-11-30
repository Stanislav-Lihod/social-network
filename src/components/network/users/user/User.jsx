import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { API } from '../../../../api/api'
import stl from './user.module.css'

const User = (props) => {
  return(
    <div className={stl.userItem}>
      <NavLink to={`/profile/${props.id}`} className={stl.userItemLinks}>
        <div className={stl.userItem__logoProfile}>
          <div className={stl.userItem__bgLogo}><img src={props.bg} alt={props.name} /></div>
          <div className={stl.userItem__logo}><img src={props.logo} alt={props.name} /></div>
        </div>
        <div className={stl.userItem__info}>
          <div className={stl.userItem__name}>{props.name}</div>
          <div className={stl.userItem__prof}>{props.prof}</div>
        </div>
      </NavLink>
      {props.followed ? 
      <button disabled={props.followingInProgress} className={stl.userItem__unfollow} onClick={()=>{ props.toggleIsFollowing(true)

        console.log(props.followingInProgress);
        API.unFollowed(props.id).then(data=> {!data.resultCode && props.onFollowed(props.id)})
        props.toggleIsFollowing(false)
        console.log(props.followingInProgress);
        }}>Unfollow</button>: 
      <button disabled={props.followingInProgress} className={stl.userItem__follow} onClick={()=>{  props.toggleIsFollowing(true)
        API.followed(props.id).then(data=>{!data.resultCode && props.onUnfollowed(props.id)})
        props.toggleIsFollowing(false)
        }}>Follow</button> }      
    </div>
  )
}

export default User
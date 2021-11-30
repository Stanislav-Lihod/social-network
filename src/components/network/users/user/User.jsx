import axios from 'axios'
import { NavLink } from 'react-router-dom'
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
      <button className={stl.userItem__unfollow} onClick={()=>{
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {withCredentials: true, headers: {'API-KEY': '900e3c80-5f8e-41e6-a8c9-521c845786f7'}})
        .then(response=>{
          if (response.data.resultCode === 0){
            props.onFollowed(props.id)
          }
        })
        }}>Unfollow</button>: 
      <button className={stl.userItem__follow} onClick={()=>{ 
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {withCredentials: true, headers: {'API-KEY': '900e3c80-5f8e-41e6-a8c9-521c845786f7'}})        
        .then(response=>{
          if (response.data.resultCode === 0){
            props.onUnfollowed(props.id)
          }
        })
        }}>Follow</button> }      
    </div>
  )
}

export default User
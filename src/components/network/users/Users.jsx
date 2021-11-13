import User from './user/User'
import stl from './users.module.css'

const Users = (props) =>{
  const users = props.users.map(user => <User key={user.id} id={user.id} name={user.name} prof={user.prof} logo={user.logo} bg={user.bg} followed={user.followed} onFollowed={props.onFollowed}
  onUnfollowed={props.onUnfollowed}/>)
  return(
   <div className={stl.users}>
     {users}
   </div>
  ) 
}

export default Users
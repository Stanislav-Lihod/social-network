import User from './user/User'
import stl from './users.module.css'
import notLogo from "../../../img/users/notUser.png"

const Users = (props) =>{
  const users = props.users.map(user => <User key={user.id} id={user.id} name={user.name} prof={user.prof} logo={user.photos.small != null ? user.photos.small : notLogo} bg={user.bg} followed={user.followed} onFollowed={props.onFollowed}
    onUnfollowed={props.onUnfollowed} />)      
  const valuePage = Math.ceil(props.totalUsersCount / props.usersPage)
  const pages =[]

  for (let i = 1; i <= valuePage; i++) pages.push(i)

  return (
    <div>
      <div className={stl.users}>{users}</div>
      {pages.map(page=><span onClick={()=>{props.onSetCurrentPage(page)}} className={props.currentPage === page && stl.active}>{page}</span>)}
    </div>
  )
}

export default Users
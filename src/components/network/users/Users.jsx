import React from 'react'
import User from './user/User'
import stl from './users.module.css'
import * as axios from 'axios'
import notLogo from "../../../img/users/notUser.png"

// const Users = (props) => {
//   const users = props.users.map(user => <User key={user.id} id={user.id} name={user.name} prof={user.prof} logo={user.logo} bg={user.bg} followed={user.followed} onFollowed={props.onFollowed}
//     onUnfollowed={props.onUnfollowed} />)
//   return (
//     <div className={stl.users}>
//       {users}
//     </div>
//   )
// }

class Users extends React.Component {

  constructor(props) {
    super(props)
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  users = this.props.users.map(user => <User key={user.id} id={user.id} name={user.name} prof={user.prof}
    logo={user.photos.small != null ? user.photos.small : notLogo} bg={user.bg} followed={user.followed}
    onFollowed={this.props.onFollowed} onUnfollowed={this.props.onUnfollowed} />)
  render() {
    return <div className={stl.users}>
      {this.users}
    </div>
  }
}

export default Users
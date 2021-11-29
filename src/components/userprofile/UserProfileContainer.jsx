import axios from "axios"
import React from "react"
import { connect } from "react-redux"
import UserProfile from "./UserProfile"
import {setUserProfile} from '../../redux/reducerWallPage'
import { withRouter } from "react-router"

class UserProfileContainerAPI extends React.Component{
  componentDidMount(){
    const userId = this.props.match.params.userId
    if (!userId) {
            
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response=>{
      this.props.setUserProfile(response.data)
    })
  }
  render(){
    return<div><UserProfile profile={this.props.profile}/></div>
  }
}

const mapStateToProps = (state) => ({
  profile: state.wallPage.userProfile
})

const WithRouterUserProfile = withRouter(UserProfileContainerAPI)

export default connect (mapStateToProps, {setUserProfile})(WithRouterUserProfile)

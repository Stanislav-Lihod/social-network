import React from "react"
import { connect } from "react-redux"
import UserProfile from "./UserProfile"
import {setUserProfile} from '../../redux/reducerWallPage'
import { withRouter } from "react-router"
import { API } from "../../api/api"

class UserProfileContainerAPI extends React.Component{
  componentDidMount(){
    const userId = this.props.match.params.userId
    API.getUserProfile(userId).then(data=>{
      this.props.setUserProfile(data)
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

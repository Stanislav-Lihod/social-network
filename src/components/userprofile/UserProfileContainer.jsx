import React from "react"
import { connect } from "react-redux"
import UserProfile from "./UserProfile"
import {getUserProfile} from '../../redux/reducerWallPage'
import { withRouter } from "react-router"

class UserProfileContainerAPI extends React.Component{
  componentDidMount(){
    const userId = this.props.match.params.userId
    this.props.getUserProfile(userId)
  }
  render(){
    return<div><UserProfile profile={this.props.profile}/></div>
  }
}

const mapStateToProps = (state) => ({
  profile: state.wallPage.userProfile
})

const WithRouterUserProfile = withRouter(UserProfileContainerAPI)

export default connect (mapStateToProps, {getUserProfile})(WithRouterUserProfile)

import React from "react"
import { connect } from "react-redux"
import UserProfile from "./UserProfile"
import {getUserProfile} from '../../redux/reducerWallPage'
import { Redirect, withRouter } from "react-router"

class UserProfileContainerAPI extends React.Component{
  componentDidMount(){
    const userId = this.props.match.params.userId
    this.props.getUserProfile(userId)
  }
  render(){    
    if(!this.props.isAuth) return <Redirect to='/login' />
    return<div><UserProfile profile={this.props.profile}/></div>
  }
}

const mapStateToProps = (state) => ({
  profile: state.wallPage.userProfile,
  isAuth: state.auth.isAuth
})

const WithRouterUserProfile = withRouter(UserProfileContainerAPI)

export default connect (mapStateToProps, {getUserProfile})(WithRouterUserProfile)

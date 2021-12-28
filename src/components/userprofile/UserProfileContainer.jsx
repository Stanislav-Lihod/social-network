import React from "react"
import { connect } from "react-redux"
import UserProfile from "./UserProfile"
import { getUserProfile, uploadPhoto } from '../../redux/reducerWallPage'
import { withRouter } from "react-router"
import { compose } from "redux"

class UserProfileContainerAPI extends React.Component {
  refreshProfile () {    
    let userId = this.props.match.params.userId
    if (!userId) userId = 20768
    this.props.getUserProfile(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps){
    if (this.props.match.params.userId !== prevProps.match.params.userId) this.refreshProfile()
  }
  render() {
    return <div><UserProfile profile={this.props.profile} uploadPhoto={this.props.uploadPhoto} isOwner={this.props.match.params.userId == this.props.myId}/></div>
  }
}

const mapStateToProps = (state) => ({
  profile: state.wallPage.userProfile,
  myId: state.auth.userId
})

export default compose(
  connect(mapStateToProps, { getUserProfile, uploadPhoto }),
  withRouter,
  // withAuthComponent
)(UserProfileContainerAPI)
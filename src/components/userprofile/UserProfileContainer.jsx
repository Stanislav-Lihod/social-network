import React from "react"
import { connect } from "react-redux"
import UserProfile from "./UserProfile"
import { getUserProfile } from '../../redux/reducerWallPage'
import { withRouter } from "react-router"
import { withAuthComponent } from "../hoc/withAuthRedirect"
import { compose } from "redux"

class UserProfileContainerAPI extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) userId = 20768
    this.props.getUserProfile(userId)
  }
  render() {
    return <div><UserProfile profile={this.props.profile} /></div>
  }
}

const mapStateToProps = (state) => ({
  profile: state.wallPage.userProfile
})

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  // withAuthComponent
)(UserProfileContainerAPI)
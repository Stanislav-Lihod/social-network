import logo from "../../../img/7h_xRpycDaI.jpg"
import stl from "./profile.module.css"
// import ProfileStatus from "./ProfileStatus"
import React from "react"
import { connect } from "react-redux"
import {getUserStatus, updateStatus} from "../../../redux/auth-reducer"
import ProfileStatusWithHooks from "./ProfileStatusWithHook"

class Profile extends React.Component {
  componentDidMount(){    
    this.props.getUserStatus()
  }
  render() {
    return (
      <div className={stl.profile}>
        <div className={stl.profileBg}></div>
        <div className={stl.profileText}>
          <div className={stl.profileText__name}>{this.props.name}</div>
          <ProfileStatusWithHooks status={this.props.status} updateStatus={this.props.updateStatus} />
        </div>
        <img src={logo} alt="logo" className={stl.profileLogo} />
      </div>
    )
  }
}

const mapStateToProps = (state) =>({
  status: state.auth.status,
  name: 'Stanislav'
})

export default connect(mapStateToProps, {getUserStatus, updateStatus})(Profile)
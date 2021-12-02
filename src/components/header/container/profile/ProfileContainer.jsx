import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setAuthUserData } from '../../../../redux/auth-reducer'
import { API } from "../../../../api/api";

class ProfileContainerAPI extends React.Component{
  componentDidMount(){
    API.login().then(data => {!data.resultCode && this.props.setAuthUserData(data.data.id, data.data.login, data.data.email)})
  }

  render(){
    return(
      this.props.isAuth ? <Profile {...this.props}/> : <a href='https://social-network.samuraijs.com/login' target="_blank" rel="noreferrer">SIGN IN</a>
    )
  }
}

const mapStateToProps = (state)=>({
  isAuth: state.auth.isAuth,
  name: state.auth.login,
  allViews: state.auth.allViews,
  todayViews: state.auth.todayViews
})
export default connect(mapStateToProps,{setAuthUserData})(ProfileContainerAPI);
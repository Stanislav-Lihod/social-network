import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { authenticator } from '../../../../redux/auth-reducer'

class ProfileContainerAPI extends React.Component{
  componentDidMount(){ this.props.authenticator() }

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
export default connect(mapStateToProps,{authenticator})(ProfileContainerAPI);
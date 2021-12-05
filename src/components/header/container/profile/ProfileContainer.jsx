import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { authenticator } from '../../../../redux/auth-reducer'
import { NavLink } from "react-router-dom";

class ProfileContainerAPI extends React.Component{
  componentDidMount(){ this.props.authenticator() }

  render(){
    return(
      this.props.isAuth ? <Profile {...this.props}/> : <NavLink to={'/login'}>SIGN IN</NavLink>
    )
  }
}

const mapStateToProps = (state)=>({
  isAuth: state.auth.isAuth,
  name: state.auth.login,
  allViews: state.auth.allViews,
  todayViews: state.auth.todayViews,
  userId: state.auth.userId
})
export default connect(mapStateToProps,{authenticator})(ProfileContainerAPI);
import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { logOut} from '../../../../redux/auth-reducer'
import { NavLink } from "react-router-dom";
import stl from './profile.module.css';

class ProfileContainerAPI extends React.Component{

  render(){
    return(
      this.props.isAuth 
      ? <div><Profile {...this.props}/> <button onClick={this.props.logOut}>logOut</button></div> 
      : <NavLink to={'/login'} className={stl.signIn}>SIGN IN</NavLink>
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
export default connect(mapStateToProps,{logOut})(ProfileContainerAPI);
import React from "react";
import axios from "axios";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setAuthUserData } from '../../../../redux/auth-reducer'

class ProfileContainerAPI extends React.Component{
  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
    .then(response => {
      if (response.data.resultCode === 0){
        const {id, login, email} = response.data.data
        this.props.setAuthUserData(id, login, email)
      }
      })
  }

  render(){
    return(
      this.props.isAuth ? <Profile {...this.props}/> : <a href='https://social-network.samuraijs.com/login' target="_blank">SIGN IN</a>
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
import LoginForm from "./Login";
import React from "react";
import stl from './login.module.css'
import {reduxForm} from 'redux-form';
import { connect } from "react-redux";
import {logIn} from '../../redux/auth-reducer'
import { Redirect } from "react-router";

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

class LoginContainer extends React.Component {
  onSubmit = (formData) =>{
   this.props.logIn(formData.email, formData.password)
  }
  render() {   
    if (this.props.isAuth) return <Redirect to={`/profile/${this.props.userId}`}/>
    return (
      <div>
        <div className={stl.descriptionLogin}>
          <p>Пожалуйста войдите используя свой Логин и Пароль, или воспользуйтесь предоставленными данными:</p>
          <p><span>Email:</span> free@samuraijs.com</p>
          <p><span>Password:</span> free</p>
        </div>
        <LoginReduxForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  userId: state.auth.userId
})

export default connect (mapStateToProps, {logIn})(LoginContainer)
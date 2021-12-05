import React from 'react'
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import Message from './Message';


class MessageContainerClass extends React.Component {
  componentDidMount() {}

  render() {    
    if(!this.props.isAuth) return <Redirect to='/login' />
    return <Message />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

const MessageContainer = connect(mapStateToProps, { })(MessageContainerClass)

export default MessageContainer
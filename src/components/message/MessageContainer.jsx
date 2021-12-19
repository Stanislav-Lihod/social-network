import React from 'react'
import { connect } from "react-redux";
import { compose } from 'redux';
import { withAuthComponent } from '../hoc/withAuthRedirect';
import Message from './Message';


class MessageContainerClass extends React.Component {
  render() {    
    return <Message />
  }
}
const mapStateToProps = (state) => ({})

export default compose(
  connect(mapStateToProps),
  withAuthComponent
)(MessageContainerClass)
import './App.css';
import Header from './components/header/Header';
import { Route } from 'react-router-dom'
import Network from './components/network/Network';
import UserProfileContainer from './components/userprofile/UserProfileContainer';
import WallContainer from './components/wall/WallContainer';
import MessageContainer from './components/message/MessageContainer';
import LoginContainer from './components/login/LoginContainer';
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializationApp } from './redux/app-reducer';
import { withRouter } from "react-router"
import Preloader from './components/common/preloader/Preloader';
import Aside from './components/aside/Aside';

class App extends React.Component {  
  componentDidMount(){ this.props.initializationApp() }
  render(){
    if (!this.props.initialization) return <Preloader/>
    return (
      <div>
        <Header />
        <div className="container">
          <div className="content">
            <Route path='/wall' render={() => (<WallContainer />)} />
            <Route path='/message' render={() => (<MessageContainer />)} />
            <Route path='/network' render={() => (<Network />)} />
            <Route path='/profile/:userId?' render={() => (<UserProfileContainer />)} />
            <Route path='/login' render={() => (<LoginContainer />)} />
          </div>
          <Aside/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialization: state.app.initialization
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializationApp})
)(App);

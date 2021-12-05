import './App.css';
import Aside from './components/aside/Aside';
import Header from './components/header/Header';
import { Route } from 'react-router-dom'
import Network from './components/network/Network';
import UserProfileContainer from './components/userprofile/UserProfileContainer';
import WallContainer from './components/wall/WallContainer';
import Login from './components/login/Login';
import MessageContainer from './components/message/MessageContainer';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">
          <Route path='/wall' render={() => (<WallContainer />)} />
          <Route path='/message' render={() => (<MessageContainer />)} />
          <Route path='/network' render={() => (<Network />)} />
          <Route path='/profile/:userId?' render={() => (<UserProfileContainer />)} />
          <Route path='/login' render={() => (<Login />)} />
        </div>
        <Aside />
      </div>
    </div>
  );
}

export default App;

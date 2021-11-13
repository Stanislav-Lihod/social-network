import './App.css';
import Aside from './components/aside/Aside';
import Header from './components/header/Header';
import Wall from './components/wall/Wall';
import Message from './components/message/Message';
import { Route } from 'react-router-dom'
import Network from './components/network/Network';

function App(props) {
  return (
      <div>
        <Header />
        <div className="container">
          <div className="content">
            <Route path='/wall' render = {()=>(<Wall/>)} />
            <Route path='/message' render={()=>(<Message/>)} />
            <Route path='/network' render={()=>(<Network/>)} />
          </div>
          <Aside />
        </div>
      </div>
  );
}

export default App;

import './App.css';
import Aside from './components/aside/Aside';
import Header from './components/header/Header';
import Wall from './components/wall/Wall';
import Message from './components/message/Message';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <div className="content">
            <Route path='/wall' component={Wall} />
            <Route path='/message' component={Message} />
          </div>
          <Aside />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

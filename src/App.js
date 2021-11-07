import './App.css';
import Aside from './components/aside/Aside';
import Header from './components/header/Header';
import Wall from './components/wall/Wall';
import Message from './components/message/Message';
import { BrowserRouter, Route } from 'react-router-dom'

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <div className="content">
            <Route path='/wall' render = {()=>(<Wall state={props.state.wallPage} dispatch={props.dispatch} />)} />
            <Route path='/message' render={()=>(<Message state={props.state.messagePage} dispatch={props.dispatch}/>)} />
          </div>
          <Aside />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

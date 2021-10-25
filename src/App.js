import './App.css';
import Aside from './components/Aside';
import Header from './components/Header';
import Profile from './components/Profile';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Profile />
        <Aside />  
      </div>    
    </div>
  );
}

export default App;

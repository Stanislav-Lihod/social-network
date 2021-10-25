import './App.css';
import Aside from './components/Aside';
import Header from './components/Header';
import Wall from './components/Wall';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Wall />
        <Aside />  
      </div>    
    </div>
  );
}

export default App;

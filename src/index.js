import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state'

export const renderEntireThree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} despatch={store.despatch.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireThree(store.getState())
store.subscribe(renderEntireThree)


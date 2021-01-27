import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {useHistory} from 'react-router-dom';
import {useSelector} from "react-redux";

function App() {

  const history = useHistory();
  const reduxMessage:string = useSelector((state:any) => state.message)

  const handleClick = () => {
      history.push("/login")
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Login</button>
        <div>{reduxMessage}</div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

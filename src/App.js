import React from 'react';
import logo from './logo.svg';
import {Button,Alert,Loading} from './components/index'
import './components/index.css'
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';


function App() {
const client = new ApolloClient({
  uri:"http://localhost:4000"
});  

  return (
    <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <div style={{padding:"10px 0"}}>
        <h1>Button</h1>
        <Button name="123" types={{a:122,b:33}}/>
        </div>
        <div style={{padding:"10px 0"}}>
        <h1>Alert</h1>
        <Alert showIcon type="success" style={{color:"#000"}} closable={true}/>
        </div>
        <div style={{padding:"10px 0"}}>
        <h1>Loading</h1>
        <Loading/>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        {/*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
    </div>
    </ApolloProvider>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import {Alert} from './components/index'
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
        <img src={logo} className="App-logo" alt="logo" />        

        <div style={{padding:"10px 0"}}>
            <h1>Alert</h1>
            <Alert message="i am a success message" type="success" style={{fontWeight:"bold"}}/>
            <Alert message="i am a error message" type="error" style={{fontWeight:"bold"}}/>
        </div>

      </header>
    </div>
    </ApolloProvider>
  );
}

export default App;

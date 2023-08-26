import logo from './logo.svg';
import server from './server';
import './App.css';
import React, {useState} from 'react';

function App() {

  const [returnedData, setReturnedData] = useState(['Hello']);

  const fetchData= async()=>{
    const newData = await fetch('/hello', {
      method: 'Get',
      headers: {
        'Content-Type': 'applicaation/json',
        'Accept': 'accept/jason'
      }
    })
    .then(res => res.json())
    console.log(newData);
    setReturnedData(newData.result)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>      
      </header>
       <button onClick={fetchData()}>Click to fetch </button>


    </div> 
    );
 
}


export default App;

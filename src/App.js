import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  function getJulianDate() {
    let timeStamp = new Date().setFullYear(new Date().getFullYear(), 0, 1);
    console.log(timeStamp);
    let yearFirstDay = Math.floor(timeStamp / 86400000);
    let today = Math.ceil(new Date().getTime() / 86400000);
    let year = new Date().getFullYear().toString().slice(2, 4);
    console.log(year);
  
    //return year + (today - yearFirstDay);
    return new Date().getTimezoneOffset();

  }
  return (
    <div className="App">
      <div className="data"> {getJulianDate()}</div>
    </div>
  );
}

export default App;

import example from './example/morning-reciept.json'
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [points, setPoints] = useState(0)

  const getTime = () => {
    const hour = new Date().getHours()
    const minute = new Date().getMinutes()
    const time = `${hour}:${minute}`
    console.log(time)
  }

  const getCurrentDate = () => {
    const day = new Date().getDate()
    const month = new Date().getMonth()+1
    const year = new Date().getFullYear()
    const date = `${month}/${day}/${year}`
    console.log(date)
  }

  const getTimePoints = () => {
    const hour = new Date().getHours()

    if(hour <= 14 && hour >= 16){
      setPoints(points + 10)
    }
  }

  const getRetailerPoints = () => {
    const retailer = example.retailer

    setPoints(points + retailer.split('').length)
    console.log(points)
  }

  return (
    <div className="App">
      <>
      <h3>points = {points}</h3>
      <h1>{example.retailer}</h1>
      <h2>{example.purchaseTime}</h2>
      <button onClick={getRetailerPoints}>Retailer</button>
      <button onClick={getTime}>Time</button>
      <button onClick={getCurrentDate}>Date</button>
      </>
    </div>
  );
}

export default App;

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
    const hour = example.purchaseTime.slice(0,-2)
    con

    if(parseInt(hour) >= 14 && parseInt(hour) <= 16){
      setPoints(points + 10)
    }
  }

  const getRetailerPoints = () => {
    const retailer = example.retailer
    setPoints(points + retailer.split('').length)
    console.log(points)
  }

  const isTheDayOdd = () => {
    const day = new Date().getDate()

    if(day % 2 !== 0) {
      setPoints(points + 6)
    }
  }

  const isEvenPrice = () => {
    const price = example.total 
    const cents = price.slice(-4)
    if (cents == parseInt('00')) {
      setPoints(points + 50)
    }
    else{
      console.log("this has cents")
    }
  }

  const divideByTwentyFive = () => {
    const price = example.total
    if (price % 0.25 === 0) {
      console.log('this is a multiple of 0.25')
      setPoints(points + 25)
    } else {
      console.log('this isnt a dividable by 0.25')
    }
  }

  const forEveryTwoItems = () => {
    const numOfItems = example.items.length
    if (numOfItems % 2 !== 0 ) {
      const divided = numOfItems / 2
      const pairs = divided.toString().slice(0, -1)
      setPoints(points + parseInt(pairs * 5))
    } else {
      const pairs = numOfItems / 2 
      setPoints(points + pairs * 5)
    }
  }


  return (
    <div className="App">
      <>
      <h3>points = {points}</h3>
      <h1>{example.retailer}</h1>
      <h2>{example.purchaseTime}</h2>
      <button onClick={getTimePoints}>time points</button>
      <button onClick={forEveryTwoItems}>How many Pairs</button>
      <button onClick={divideByTwentyFive}>Is it a multiple of 0.25</button>
      <button onClick={isEvenPrice}>Check Price</button>
      <button onClick={getRetailerPoints}>Retailer</button>
      <button onClick={getTime}>Time</button>
      <button onClick={getCurrentDate}>Date</button>
      </>
    </div>
  );
}

export default App;

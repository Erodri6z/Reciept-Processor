
import './App.css';

function App() {

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

  const getPoints = () => {
    const hour = new Date().getHours()
    let points = 0

    if(hour <= 14 && hour >= 16){
      points = points + 10
    }
  }

  return (
    <div className="App">
      <>
      <button onClick={getTime}>Time</button>
      <button onClick={getCurrentDate}>Date</button>
      </>
    </div>
  );
}

export default App;

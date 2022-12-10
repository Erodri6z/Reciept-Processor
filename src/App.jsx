
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

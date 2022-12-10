
import './App.css';

function App() {

  const getTime = () => {
    const time = new Date().getHours()
    console.log(time)
  }

  const getCurrentDate = () => {
    const day = new Date().getDate()
    const month = new Date().getMonth()+1
    const year = new Date().getFullYear()
    console.log(month, day, year)
  }

  return (
    <div className="App">
      <>
      <button onClick={getTime}>time</button>
      <button onClick={getCurrentDate}>Date</button>
      </>
    </div>
  );
}

export default App;

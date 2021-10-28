import './App.css'
import Counter from './container/appContainer'

function App(props) {
  const Counter = 0
  return (
    <div className="App">
      <header className="App-header">
          <p>{Counter}</p>
          <div>
              <button onClick={props.increment}>INCREMENT BY 1</button>
          </div>
          <div>
              <button onClick={props.decrement}>DECREMENT BY 1</button>
          </div>
          <div>
              <button onClick={props.reset}>RESET</button>
          </div>
      </header>
    </div>
  );
}

export default App;

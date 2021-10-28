import './App.css';
import {Provider} from "react-redux";
import BookContainer from './components/bookContainer';
import HookBook from './components/HookBook'
import store from "./redux/store";

function App() {
  return (
    <Provider store = {store}>
    <div className="App">  
      <HookBook />
      <BookContainer />

    </div>
    </Provider>
  );
}

export default App;

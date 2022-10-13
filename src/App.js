import logo from './logo.svg';
import './App.css';
import Main from "./components/Main/Main"
import data from "./helper/data"


function App() {
  return (
    <div className="app">
      
      <Main data={data} />
    </div>
  );
}

export default App;

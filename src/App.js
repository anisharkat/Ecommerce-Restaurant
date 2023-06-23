import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import { Fragment } from 'react';
import Navs from './component/Navs/Navs';

function App() {
  return (
    <div className="App">
      <Fragment>
      <Navs/>
      <Home/>
      </Fragment>
    </div>
  );
}

export default App;

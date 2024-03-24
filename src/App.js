import React from "react";
import './App.css';
import Counter from './counter';
import WelcomeMessage from './welcomeMessage'
import Stopwatch from "./Stopwatch.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="App">
      {/* <Counter>Counter App</Counter> */}
     {/* <WelcomeMessage></WelcomeMessage> */}
    <Stopwatch></Stopwatch>
     </div>
    );
  }
}
export default App;

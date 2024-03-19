import React from "react";
import './App.css';
import Counter from './counter';
import WelcomeMessage from './welcomeMessage'

class App extends React.Component {
  render() {
    return (
      <div className="App">
      {/* <Counter>Counter App</Counter> */}
     <WelcomeMessage></WelcomeMessage>
     </div>
    );
  }
}
export default App;

import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import HeaderTabs from './HeaderTabs';


class App extends Component {
  render() {
    return (
     <div className="App">
        <Header />
        <HeaderTabs />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    </div>
  );
  }
}

export default App;
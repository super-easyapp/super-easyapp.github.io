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
    </div>
  );
  }
}

export default App;
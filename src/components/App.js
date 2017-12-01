import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import HeaderTabs from './HeaderTabs';
import QuixIcon from '../images/quixIcon-color.svg';

class App extends Component {
  render() {
    return (
     <div className="App">
        <Header />
        <HeaderTabs />

        <div className="emptyState">
          <img src={QuixIcon} className="QuixIcon" alt="QuixIcon" />
          <span>
              
          </span>
        </div>

    </div>
  );
  }
}

export default App;
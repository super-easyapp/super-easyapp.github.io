import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import HeaderTabs from './HeaderTabs';
import QuixCard from '../images/quixCard.png';

class App extends Component {
  render() {
    return (
     <div className="App">
        <Header />
        <HeaderTabs />

        <div className="emptyState">
          <img src={QuixCard} className="QuixCard" alt="QuixCard" />

          <img src={QuixCard} className="QuixCard" alt="QuixCard" />

        </div>

    </div>
  );
  }
}

export default App;
import React from 'react';
import Routing from './Routing'
import styles from './App.module.css'
import Navigation from './Components/Navigation/Navigation';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className={styles}>
    <Router>
        <Navigation position="main" />
          <Routing />
        <Navigation position="bottom"/>
    </Router>
    </div>
  );
}

export default App;

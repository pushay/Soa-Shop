import React from 'react';
import Routing from './Routing'
import styles from './App.module.css'
import Navigation from './AroundComponents/Navigation/Navigation';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBottom from './AroundComponents/Navigation/NavigationBottom/NavigationBottom'


function App() {
  return (
    <div className={styles}>
    <Router>
        <Navigation />
          <Routing />
        <NavigationBottom />
    </Router>
    </div>
  );
}

export default App;

import React, { Fragment } from 'react'; 

import './App.css';
import Header from './components/Layout/Navigation/Header';
import Home from './components/Body/Home/Home';

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <Home/>
      </main>
    </Fragment>
  );
}

export default App;

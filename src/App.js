import React from 'react';
import './components/sass/main.scss';
import HeroTest from './components/Quiz/HeroTest/HeroTest';
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeroTest/>
      </div>
    </BrowserRouter>
  );
}

export default App;

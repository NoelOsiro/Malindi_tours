import React, { useState } from 'react';
import './App.css';
import Main from './Components/MainPage/main';
import Sidebar from './Components/Sidebar/sidebar';

function App() {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div className="App">
      <Sidebar isActive={isActive} />
      <Main isActive={isActive} toggleClass={toggleClass}/>
    </div>
  );
}

export default App;

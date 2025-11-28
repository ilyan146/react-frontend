import {MyComponent, MyButton, FancyButton, Header, Search, Footer } from './components';
import './mine.css'
import React, { useState } from 'react';

const App = () => {

  const [purpleMode, setPurpleMode] = useState(false);  

  return <div className="h-screen flex flex-col">
    <Header purpleMode={purpleMode} togglePurpleMode={() => setPurpleMode(!purpleMode)} />
    <Search purpleMode={purpleMode} />
    <Footer />
  </div>
};

export default App

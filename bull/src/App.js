import React from 'react';
import './App.css';
import Home from './components/Home';
import SearchBox from './components/SearchBox';
import  Output  from './components/Output';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <SearchBox/>
      <Output />
    
    </div>
  );
}

export default App;
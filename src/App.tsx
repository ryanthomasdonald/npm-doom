import React from 'react';
import './App.css';
import DosPlayer from "./dos-player";

function App() {
  return (
    <div className="App" style={{ width: "1024px", height: "768px" }}>
        <DosPlayer bundleUrl="DOOM.jsdos" />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import DogsListsContainer from './components/DogsListsContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dogslist</h1>
      </header>
      <main>
        <DogsListsContainer/>
      </main>
    </div>
  );
}

export default App;

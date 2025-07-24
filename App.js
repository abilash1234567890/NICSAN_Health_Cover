
import React from 'react';
import './App.css';
import QuoteForm from './QuoteForm';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <img src="/logo.png" alt="NICSAN Logo" className="logo" />
        <h1>NICSAN Health Cover Estimator</h1>
      </header>
      <main>
        <QuoteForm />
      </main>
    </div>
  );
}

export default App;

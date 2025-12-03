import { useState } from 'react';
import './App.css';
import NewComponent from './NewComponent';

export default function App() {
  const [showNew, setShowNew] = useState(false);

  return (
    <div className="app">
      {showNew ? (
        <NewComponent />
      ) : (
        <>
          <h1>Welcome to First_Project</h1>
          <button onClick={() => setShowNew(true)}>Get Started</button>
        </>
      )}
    </div>
  );
}
import React from 'react';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="h-screen flex flex-col">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
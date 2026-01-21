import React from 'react';
import Header from './components/Header';
import Posts from './components/Posts';

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <Header />
      <Posts />
    </div>
  );
}

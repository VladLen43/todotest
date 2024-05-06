import React from 'react';
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.container}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;

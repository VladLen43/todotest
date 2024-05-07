import React from 'react';
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import styles from './App.module.scss'
import { LoginPage } from './pages/Login/Login';

function App() {
  return (
    <div className={styles.container}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
    </div>
  );
}

export default App;

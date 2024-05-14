import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import styles from './App.module.scss'
import { Main } from './components/Main/Main';
import { Login } from './components/LoginComp/Login';
import { RegisterPage } from './components/Register/Register';

function App() {
  
  return (
    <div className={styles.container}>
      <Main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
        </Main>
    </div>
  );
}

export default App;

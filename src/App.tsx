import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import styles from './App.module.scss'
import { Main } from './components/Main/Main';
import { RegisterPage } from './components/Register/Register';
import { Login } from './components/LoginComp/Login';

function App() {
  return (
    <div className={styles.container}>
        <Routes>
         <Route path='/' element={ <Main><Home/></Main>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import styles from './App.module.scss'
import { Login } from './components/LoginComp/Login';
import { RegisterPage } from './components/Register/Register';
import { PrivateRoutes } from './components/PrivateRoutes/PrivateRoutes';

function App() {
  
  return (
    <div className={styles.container}>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<RegisterPage />} />
              <Route element={<PrivateRoutes />}>
                  <Route path='/' element={<Home />} />
              </Route>
        </Routes>
    </div>
  );
}

export default App;

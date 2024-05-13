import {observer} from 'mobx-react-lite'
import { useEffect, useState } from "react";
import users from '../../store/auth';
import { Link, useNavigate } from 'react-router-dom';
import { when } from 'mobx';
import styles from './Login.module.scss'

export const Login = observer(() => {

    const [ username, setUsername] = useState('');
    const [ password, setPassword] = useState('');


    const  navigate = useNavigate()

    const onSubmit = () => {
        if(username.length > 0 || password.length > 0) {
            
            const user = {
                id: Date.now().toString(),
                username: username,
                password: password,
                access: !users.access,
            } 
            users.loginUser(user)

        }
        else {
            alert('Введите данные пользователя')
        }
    }

  
    useEffect(() => {   
        when(
            () => users.access === true,
            () => {
            navigate('/')
        }
        );
    },[])
    
  return (
    <div className={styles.container}>

            <input type='text' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>

            <input type='text' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>

            <button onClick={() => onSubmit()}>Login</button>
            
            <Link className={styles.reg_link} to='/register'>Register</Link>
   </div>
  )
})

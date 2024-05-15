import { useEffect, useState } from 'react'
import UserStore from '../../store/auth'
import { when } from 'mobx'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Register.module.scss'


export const RegisterPage = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const onSubmit = () => {
        if(userName.length > 0 || password.length > 0) {

            const user = {
                id: Date.now().toString(),
                username: userName,
                password: password
            }
          
            navigate('/login')

            UserStore.addUser(user)
    }
    }
  
        useEffect(() => {   
            when(
                () => !!UserStore.user,
                () => {
                navigate('/')
            }
        );
      
        },[])

    
  return (
    <div className={styles.container}>

        <input type="text" placeholder='Select your name' value={userName} onChange={(e) => setUserName(e.target.value)} />

        <input type="text" placeholder='Select your password'value={password} onChange={(e) => setPassword(e.target.value)} />

        <button onClick={() => onSubmit()}>Register</button>

        <Link className={styles.log_link} to='/login'>Login</Link>
    </div>
  )
}
import { useState } from 'react'
import users from '../../store/auth'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Register.module.scss'


export const RegisterPage = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    const onSubmit = () => {
        if(userName.length > 0 || password.length > 0) {

            const user = {
                fullName: userName,
                password: password,
                email: email,
                avatarUrl: 'eeesss',
                
            }
            

            users.addUser(user)
            navigate('/login')
    }
    }
  
        

    
  return (
    <div className={styles.container}>

        <input type="text" placeholder='Select your name' value={userName} onChange={(e) => setUserName(e.target.value)} />
        <input type="password" placeholder='Select your password'value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => onSubmit()}>Зарегестироваться</button>
    </div>
  )
}
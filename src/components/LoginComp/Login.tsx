import {observer} from 'mobx-react-lite'
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import users from '../../store/auth'
import { UserType } from '../../types';
import { useNavigate } from 'react-router-dom';
import { when } from 'mobx';

export const Login = observer(() => {

    const [ username, setUsername] = useState('');
    const [ password, setPassword] = useState('')
    const  navigate = useNavigate()

    const onSubmit = () => {
        if(username.length > 0 || password.length > 0) {
            const user = {
                id: "1",
                username: username,
                password: password,
                access: !users.user.access,
            } 
            users.loginUser(user)
        }
        else {
            alert('Веедите данные пользователя')
        }
    }
    useEffect(() => {   
        when(
            () => users.user.access === true,
            () => {
            navigate('/')
        }
        );
    },[])
    
  return (
    <div>
            <input type='text' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type='text' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}  />
            <button onClick={() => onSubmit()}>Send</button>
    </div>
  )
})

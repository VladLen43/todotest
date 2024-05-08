import React, { useState } from 'react'
import users from '../../store/auth'
import { UserType } from '../../types'


export const RegisterPage = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = () => {
        if(userName.length > 0 || password.length > 0) {

            const user = {
                id: Date.now().toString(),
                username: userName,
                password: password,
                access: true,
            }
            console.log(user)

            users.addUser(user)
    }
    }
  return (
    <div>
        <input type="text" placeholder='Select your name' value={userName} onChange={(e) => setUserName(e.target.value)} />
        <input type="password" placeholder='Select your password'value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => onSubmit()}>Зарегестироваться</button>
    </div>
  )
}
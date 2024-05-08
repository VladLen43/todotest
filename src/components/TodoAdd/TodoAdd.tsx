import React, { useEffect } from 'react'
import styles from './TodoAdd.module.scss'
import {observer} from 'mobx-react-lite'
import todo from '../../store/todo'
import users from '../../store/auth'

export const TodoAdd = observer(() => {

    const [inputText, setInputText] = React.useState('')

    const user = JSON.parse(localStorage.getItem('user') || '{}') 


    useEffect(() => {
      
      
    },[inputText])

    const todoAdd = () => {
       const td = {
        id: Date.now().toString(),
        title: inputText,
        completed: false,
        user: user.username,
       }
       if(td.title.length > 0) {

          todo.addTodo(td)
          setInputText('')
            
       } else {
        alert('Error, no title')
       }
    }
  return (
    <div className={styles.todoAddBlock}>

            <input type="text" placeholder='Add new task' onChange={(e) => setInputText(e.target.value)} />
            <button onClick={todoAdd}>+</button>
            
        </div>
  )
})

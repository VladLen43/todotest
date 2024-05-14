import { useState } from 'react'
import styles from './TodoAdd.module.scss'
import {observer} from 'mobx-react-lite'
import todo from '../../store/todo'
import UserStore from '../../store/auth'

export const TodoAdd = observer(() => {

    const [inputText, setInputText] = useState('')


    const todoAdd = () => {

      if(inputText.length > 0 && UserStore.user) {
         const user = JSON.parse(localStorage.getItem('user') || '{}')
         const td = {
            id: Date.now().toString(),
            title: inputText,
            isDone: false,
            userId: user.id,
           }

           todo.addTodo(td)  
           setInputText('') 
      } else {
         alert('Please write the input text')
      }
          
    }
  return (
    <div className={styles.todoAddBlock}>

            <input type="text" placeholder='Add new task' value={inputText} onChange={(e) => setInputText(e.target.value)} />
            <button onClick={todoAdd}>+</button>
            
        </div>
  )
})

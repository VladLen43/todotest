import { useState } from 'react'
import styles from './TodoAdd.module.scss'
import {observer} from 'mobx-react-lite'
import todo from '../../store/todo'

export const TodoAdd = observer(() => {

    const [inputText, setInputText] = useState('')


    const todoAdd = () => {

      if(inputText.length > 0) {
         const td = {
            id: Date.now().toString(),
            title: inputText,
            isDone: false
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

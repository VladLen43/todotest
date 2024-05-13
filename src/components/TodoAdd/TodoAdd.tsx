import React, { useEffect } from 'react'
import styles from './TodoAdd.module.scss'
import {observer} from 'mobx-react-lite'
import todo from '../../store/todo'

export const TodoAdd = observer(() => {

    const [inputText, setInputText] = React.useState('')


    const todoAdd = () => {
       const td = {
        id: Date.now().toString(),
        title: inputText,
        completed: false
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

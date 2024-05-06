import React from 'react'
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

       todo.addTodo(td)
    }
  return (
    <div className={styles.todoAddBlock}>

            <input type="text" onChange={(e) => setInputText(e.target.value)} />
            <button onClick={todoAdd}>+</button>
            
        </div>
  )
})

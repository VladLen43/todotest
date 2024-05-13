import React, { useEffect } from 'react'
import styles from './TodoAdd.module.scss'
import {observer} from 'mobx-react-lite'
import todo from '../../store/todo'

export const TodoAdd = observer(() => {

    const [inputText, setInputText] = React.useState('')

    const user = JSON.parse(localStorage.getItem('user') || '{}') 


    const todoAdd = () => {
       const td = {
        title: inputText,
        completed: false,
        userId: user._id,
        imageUrl: '....',
        tags: '....',
        text: '....',
        priority: 0
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

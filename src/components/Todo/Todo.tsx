import React from 'react'
import todo from '../../store/todo'
import styles from './Todo.module.scss'

type TodoProps ={
    id: string,
    title: string,
    completed: boolean
}

export const Todo:React.FC<TodoProps> = ({id, title, completed}) => {

    const isEditing = false;
   const changeStatusTodo = () => {
        
   }

  return (
    <div className={styles.todo_container} key={id}>
            <p><button></button>{title}</p>

            <input type='checkbox' onChange={() => todo.completeTodo(id)} checked={completed} />

            <button className={styles.delete_button} onClick={() => todo.removeTodo(id)}>
                    <img style={{width: '20px'}} src='/img/trash.svg'></img>
            </button>
    </div>
  )
}

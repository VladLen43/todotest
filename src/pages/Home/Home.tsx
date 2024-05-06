import React from 'react'
import  TodoStore  from '../../store/todo'
import styles from '../../App.module.scss'
import { TodoAdd } from '../../components/TodoAdd/TodoAdd'
import {observer} from 'mobx-react-lite'
import todo from '../../store/todo'
import { todoType } from '../../types'
import { Todo } from '../../components/Todo/Todo'



export const Home = observer(() => {

    const doneTodos = TodoStore.todos.filter((todo) => todo.completed === true)

  return (
    <div className={styles.main}>
        <TodoAdd />
        <h3>Task to do - {TodoStore.todos.length}</h3>
        <div className={styles.list}>
            {
                TodoStore.todos.map((td,index) =>(

                    <div key={index}>{td.completed === false ? <Todo id ={td.id} title={td.title} completed={td.completed} /> : <div></div> } </div>
                ) )
            }
        </div>
        <div className={styles.list_done}>
            <h3>Done - {doneTodos.length}</h3>
            {
                doneTodos.map((t,index) => (
                    <div className={styles.done} key={index}>{t.completed === true ? <Todo id ={t.id} title={t.title} completed={t.completed} /> : <div></div> } </div>
                ))
            }
        </div>
      
    </div>
  )
})

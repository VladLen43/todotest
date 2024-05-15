import { useEffect, useMemo } from 'react'
import  TodoStore  from '../../store/todo'
import styles from '../../App.module.scss'
import { TodoAdd } from '../../components/TodoAdd/TodoAdd'
import {observer} from 'mobx-react-lite'
import UserStore from '../../store/auth'
import { Todo } from '../../components/Todo/Todo'
import { todoType } from '../../types'



export const Home = observer(() => {

  useEffect(() => {
      if(!UserStore.user) return

      const todos : todoType[] = JSON.parse(localStorage.getItem('todos') || '[]')

      TodoStore.getTodos(todos)

    },[UserStore.user])
   
      const UserTodos : todoType[] = useMemo(() => TodoStore.todos.filter((todo) => todo.userId === UserStore.user?.id),[TodoStore.todos])
      const doneTodos: todoType[] = useMemo(() =>  UserTodos.filter(todo => todo.isDone),[TodoStore.todos])
      const unDoneTodos : todoType[] =  useMemo(() => UserTodos.filter(todo => !todo.isDone),[TodoStore.todos])
      

  return (
    <div className={styles.main}>
        <TodoAdd />
          <h3>Task to do - {unDoneTodos.length}</h3>
    
        <div className={styles.list}>
            {
              unDoneTodos.map((td :todoType) =>(
                  <Todo td = {td} />
                ))
            }
        </div>
        <div className={styles.list_done}>
            <h3>Done - {doneTodos.length}</h3>
              {
                doneTodos.map((td: todoType) => (
                  <Todo td={td} /> 
                ))
            }
        </div>
    </div>
  )
})

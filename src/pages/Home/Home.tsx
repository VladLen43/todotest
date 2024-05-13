import { useEffect } from 'react'
import  TodoStore  from '../../store/todo'
import styles from '../../App.module.scss'
import { TodoAdd } from '../../components/TodoAdd/TodoAdd'
import {observer} from 'mobx-react-lite'
import users from '../../store/auth'
import { Todo } from '../../components/Todo/Todo'
import { useNavigate } from 'react-router-dom'
import { when } from 'mobx'
import { todoType } from '../../types'



export const Home = observer(() => {

    const navigate = useNavigate()

    useEffect(() => {   
        when(
            () => users.access === false,
            () => {
            navigate('/login')
        }
    );
  
    },[])


  const doneTodos = TodoStore.todos.filter((todo: todoType) => todo.completed === true)
  const uncompletedTodos = TodoStore.todos.filter((todo: todoType) => todo.completed === false)

  return (
    <div className={styles.main}>
        <TodoAdd />
        <h3>Task to do - {TodoStore.todos.length}</h3>
        <div className={styles.list}>
            {
                uncompletedTodos.map((td :todoType) =>(
              
                  <Todo td = {td} />
                ) )
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

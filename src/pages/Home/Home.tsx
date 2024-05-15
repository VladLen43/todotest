import { useEffect, useMemo } from 'react'
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

  useEffect(() => {

       TodoStore.getTodos(user._id)
  
  },[])

    const navigate = useNavigate()

    const user = JSON.parse(localStorage.getItem('user') || '{}') 
  

    useEffect(() => {   
        when(
            () => users.user.access === false,
            () => {
            navigate('/login')
        }
    );
  
    },[])


    const doneTodos = useMemo(() => TodoStore.todos.filter((todo: todoType) => todo.completed === true),[TodoStore.todos])
    const uncompletedTodos = useMemo(() => TodoStore.todos.filter((todo: todoType) => todo.completed === false),[TodoStore.todos])
  

  return (
    <div className={styles.main}>
        <TodoAdd />
        <h3>Task to do - {uncompletedTodos.length}</h3>
        <div className={styles.list}>
            {
                TodoStore.todos.map((td: todoType) =>(

                    <div key={td._id}>{td.completed === false ? <Todo id ={td._id} title={td.title} completed={td.completed} /> : <div></div> } </div>
                ) )
            }
        </div>
        <div className={styles.list_done}>
            <h3>Done - {doneTodos.length}</h3>
              {
                doneTodos.map((t: todoType) => (

                    <div className={styles.done} key={t._id}>
                      {
                        t.completed === true 
                            ? <Todo id ={t._id} title={t.title} completed={t.completed} /> 
                            : <div></div> 
                      }
                    </div>
                ))
            }
        </div>
    </div>
  )
})

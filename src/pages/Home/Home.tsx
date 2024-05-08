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
            () => users.user.access === false,
            () => {
            navigate('/login')
        }
    );
  
    },[])

  const user = JSON.parse(localStorage.getItem('user') || '{}') 
  console.log(user)

  const UserTodos = TodoStore.todos.filter((todo : todoType) => todo.user === user.username)

  const doneTodos = UserTodos.filter((todo: todoType) => todo.completed === true)

  return (
    <div className={styles.main}>
        <TodoAdd />
        <h3>Task to do - {UserTodos.length}</h3>
        <div className={styles.list}>
            {
                UserTodos.map((td: todoType) =>(

                    <div key={td.id}>{td.completed === false ? <Todo id ={td.id} title={td.title} completed={td.completed} /> : <div></div> } </div>
                ) )
            }
        </div>
        <div className={styles.list_done}>
            <h3>Done - {doneTodos.length}</h3>
              {
                doneTodos.map((t: todoType) => (

                    <div className={styles.done} key={t.id}>
                      {
                        t.completed === true 
                            ? <Todo id ={t.id} title={t.title} completed={t.completed} /> 
                            : <div></div> 
                      }
                    </div>
                ))
              }
        </div>

    </div>
  )
})

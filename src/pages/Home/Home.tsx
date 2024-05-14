import { useEffect, useMemo, useState } from 'react'
import  TodoStore  from '../../store/todo'
import styles from '../../App.module.scss'
import { TodoAdd } from '../../components/TodoAdd/TodoAdd'
import {observer} from 'mobx-react-lite'
import UserStore from '../../store/auth'
import { Todo } from '../../components/Todo/Todo'
import {  useNavigate } from 'react-router-dom'
import { when } from 'mobx'
import { todoType } from '../../types'



export const Home = observer(() => {


  useEffect(() => {
      if(!UserStore.user) return

      const todos : todoType[] = JSON.parse(localStorage.getItem('todos') || '[]')

      TodoStore.getTodos(todos.filter((item) => item.userId === UserStore.user?.id))

  },[UserStore.user])

    const navigate = useNavigate()

    useEffect(() => {   
        when(
            () => UserStore.access === false,
            () => {
            navigate('/login')
        }
    );
  
    },[])


     
      const doneTodos: todoType[] = useMemo(() =>  TodoStore.todos.filter(todo => todo.isDone),[TodoStore.todos])
      const unDoneTodos : todoType[] =  useMemo(() => TodoStore.todos.filter(todo => !todo.isDone),[TodoStore.todos])
      

      useEffect(() => console.log('kek', unDoneTodos), [unDoneTodos])


  return (
    <div className={styles.main}>
        <TodoAdd />
        <h3>Task to do - {unDoneTodos.length}</h3>
        <div className={styles.list}>
            {
                unDoneTodos.map((td :todoType) =>(
                  
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

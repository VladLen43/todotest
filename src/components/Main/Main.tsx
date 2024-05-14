import styles from './Main.module.scss'
import { Header } from '../Header/Header'
import { useEffect } from 'react'
import UserStore from '../../store/auth'
import { UserType } from '../../types'

export const Main = ({children} : any) => { 

  useEffect(() => {
    const users: UserType[] = JSON.parse(localStorage.getItem('users') || '[]')
    if(users) {
      UserStore.getUsers(users)
    }

    const user: UserType = JSON.parse(localStorage.getItem('user') || '[]')
    if(user) {
      UserStore.getUser(user)
    }

  },[])

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.app_wrapper}>
        { children }
      </div>
    </div>
  )
}

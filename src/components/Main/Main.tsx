import styles from './Main.module.scss'
import { Header } from '../Header/Header'
import { useEffect } from 'react'
import UserStore from '../../store/auth'
import { UserType } from '../../types'
import { useNavigate } from 'react-router-dom'

export const Main = ({children} : any) => { 

  const navigate = useNavigate()


  useEffect(() => {

    const userLSArray = localStorage.getItem('users')
    const usersArray: UserType[] = userLSArray ? JSON.parse(userLSArray) : undefined
    const userLS = localStorage.getItem('user')
    const user: UserType = userLS ? JSON.parse(userLS) : undefined
    
    if(usersArray) {
      UserStore.getUsers(usersArray)
    }

    if(user) {
      UserStore.getUser(user)
      navigate('/')
    } else {      
      navigate('/login')
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

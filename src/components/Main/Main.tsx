import React, { useEffect, useState } from 'react'
import styles from './Main.module.scss'
import users from '../../store/auth'
import { when } from 'mobx'
import { useNavigate } from 'react-router-dom'
import { Header } from '../Header/Header'

export const Main = ({children} : any) => { 

//   const navigate = useNavigate()

//   const [status, setStatus] = useState(true)

//   useEffect(() => {   
//     when(
//         () => users.user.access === false,
//         () => {
//         navigate('/login')
//         setStatus(false)
// }
// );

// },[])

  return (
    <div className={styles.container}>
      <Header />
       { children }
    </div>
  )
}

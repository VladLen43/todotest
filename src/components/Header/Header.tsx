import React, { useEffect, useRef, useState } from 'react'
import styles from './Header.module.scss'
import users from '../../store/auth'
import { AccountIcon } from './AccountIcon'
import { useNavigate } from 'react-router-dom'


export const Header:React.FC = () => {

  const [isHide, setIsHide] = useState(false);
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setIsLogin(true)
    }
  },[])

  const ref = useRef<HTMLInputElement>(null);


  const handleClickOutside = (event : any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsHide(false);
    }
}

useEffect(() => {
    document.addEventListener('click', handleClickOutside);
  return () =>   
    document.removeEventListener('click', handleClickOutside);
  },[])
 
  return (

    <div ref={ref} className={styles.container} >

          <div className={styles.account_buttons} style={{display: isLogin ? 'flex' : 'none'}} onClick={() => setIsHide(!isHide)}>
                <button className={styles.parent_button} >
                    <AccountIcon />
                </button>
                  <div className={styles.open_button} >
                    <button className={isHide ? styles.open : styles.close} onClick={() => users.logoutUser() }>Выйти</button>
                  </div>
              </div>
          </div>
  )
}

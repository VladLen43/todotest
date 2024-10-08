import React, { useEffect, useRef, useState, useMemo } from 'react'
import styles from './Header.module.scss'
import UserStore from '../../store/auth'
import { useNavigate } from 'react-router-dom'
import {AccountIcon} from '../../assets/icons/index'
 

export const Header:React.FC = () => {

  const navigate = useNavigate();
  const [isHide, setIsHide] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  
  const isLoggedIn = useMemo(() => !!UserStore.user, [UserStore.user])

  const handleClickOutside = (event : any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsHide(false);
    }
}

const logoutHandler = () => {
  UserStore.logoutUser()
  navigate('/login')
}

useEffect(() => {
    document.addEventListener('click', handleClickOutside);
  return () =>   
    document.removeEventListener('click', handleClickOutside);
  },[])
 
  return (

    <div ref={ref} className={styles.container} >

          <div className={styles.account_buttons} style={{display: isLoggedIn ? 'flex' : 'none'}} onClick={() => setIsHide(!isHide)}>
                <button className={styles.parent_button} >
                    <AccountIcon />
                </button>
                  <div className={styles.open_button} >
                    <button className={isHide ? styles.open : styles.close} onClick={logoutHandler}>
                        Выйти
                      </button>
                  </div>
              </div>
          </div>
  )
}

import React, { useEffect, useRef, useState } from 'react'
import styles from './Header.module.scss'
import users from '../../store/auth'
import { AccountIcon } from './AccountIcon'


export const Header:React.FC = () => {

  const [isHide, setIsHide] = useState(false)

  const ref = useRef<HTMLInputElement>(null);

  const user = JSON.parse(localStorage.getItem('user')|| '[]')

  console.log(user)


useEffect(() => {
    const handleClickOutside = (event : any) => {
    
      if (ref.current && !ref.current.contains(event.target)) {
        setIsHide(false);
      }
  }
        document.addEventListener('click', handleClickOutside);

  return () => {
    
          document.removeEventListener('click', handleClickOutside);
  };

  },[])
 
  return (

    <div ref={ref} className={styles.container} >
        <div className={styles.buttons} onClick={(e) => e.stopPropagation()} >
                <button className={styles.parent_button} onClick={() => {setIsHide(!isHide)}}>
                    <AccountIcon />
                </button>
         
                <div id={styles.opened_buttons} className={isHide ? styles.open : styles.close}>

                      <button onClick={() => users.logoutUser()}>Выйти</button>

                </div>
        
        </div>
    </div>
  )
}

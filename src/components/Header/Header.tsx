import React, { useState } from 'react'
import styles from './Header.module.scss'
import users from '../../store/auth'

export const Header = () => {

    const [hide, setHide] = useState(true)

  return (
    <div className={styles.container}>
        <div className={styles.buttons}>
                <button onClick={() => setHide(!hide)}>
                    {hide ? 'Открыть' : "Закрыть"}
                </button>
            <button className={hide ? styles.close : styles.open} onClick={() => users.removeUser()}>Выйти</button>
        </div>
    </div>
  )
}

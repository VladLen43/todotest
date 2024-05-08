import React, { useState } from 'react'
import styles from './Header.module.scss'
import users from '../../store/auth'
import { AccountIcon } from './AccountIcon'

export const Header = () => {

    const [hide, setHide] = useState(true)

  return (
    <div className={styles.container}>
        <div className={styles.buttons}>
                <button className={styles.parent_button} onClick={() => setHide(!hide)}>
                    <AccountIcon />
                </button>
            <button className={hide ? styles.close : styles.open} onClick={() => users.logoutUser()}>Выйти</button>
            <button className={hide ? styles.close : styles.open} onClick={() => users.removeUser()}>Удалить пользователя</button>
        </div>
    </div>
  )
}

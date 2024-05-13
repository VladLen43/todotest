import React, { useEffect, useState } from 'react'
import styles from './Main.module.scss'
import users from '../../store/auth'
import { when } from 'mobx'
import { useNavigate } from 'react-router-dom'
import { Header } from '../Header/Header'

export const Main = ({children} : any) => { 


  return (
    <div className={styles.container}>
      <Header />
       { children }
    </div>
  )
}

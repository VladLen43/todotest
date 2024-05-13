import styles from './Main.module.scss'
import { Header } from '../Header/Header'

export const Main = ({children} : any) => { 

  return (

    <div className={styles.container}>
        <Header/>
       { children }
    </div>
  )
}

import UserStore from '../../store/auth'
import { Navigate, Outlet} from 'react-router-dom'
import { Header } from '../Header/Header'
import styles from './PrivateRoutes.module.scss'

export const PrivateRoutes = () => {

  return (
    <div className={styles.container}>
        <Header />
        <div className={styles.app_wrapper}>
            { UserStore.user ? <Outlet /> : <Navigate to='/login' /> }
        </div>
    </div>
  )
}

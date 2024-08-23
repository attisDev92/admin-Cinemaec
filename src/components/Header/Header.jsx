import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.Header}>
      <img src='/assets/icons/logo_ifci.png' alt='IFCI' />
      <img src='/assets/icons/rea_logo_w.png' alt='REA' />
    </div>
  )
}

export default Header

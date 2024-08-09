import styles from './styles/Header.module.css'
import rocket from '../assets/rocket.svg'

export function Header() {
  return (
    <header>
      <div className={styles.logo}>
        <img src={rocket} alt="Ícone de Foguete" />
        <h1 className={styles.logoText}>
          to<span>do</span>
        </h1>
      </div>
    </header>
  )
}

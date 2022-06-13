import styles from './Header.module.css';
import logoIgnite from '../../assets/ignite-simbol.svg';

export function Header(){
  return(
    <header className={styles.header}>
      <img src={logoIgnite} alt="Logo do Ignite" />
      <strong className={styles.header}>Ignite Feed</strong>
    </header>
  )
}
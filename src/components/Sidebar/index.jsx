
import styles from './Sidebar.module.css';

export function Sidebar(){
  return(
      <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://images.unsplash.com/photo-1654970209837-c5f100294796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=72s" alt="" />

        <div className={styles.profile}>
          <strong>Maria Lina</strong>
          <span>Front-End Developer</span>
        </div>

        <footer>
          <a href="#">
            Editar seu perfil
          </a>
        </footer>
      </aside>
  )
}
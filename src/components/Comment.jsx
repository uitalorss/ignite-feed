import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment(){
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} imageAddress="https://github.com/uitalorss.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.infoAuthor}>
              <strong>Uítalo Souza</strong>
              <time title='14 de Junho de 2022 às 22:40' dateTime='2022-06-14 22:40:30'>Cerca de 20 minutos atrás</time>
            </div>
            <button className={styles.buttonDelete} title='deleteComment'>
              <Trash size={24} />
            </button>
          </header>
          <p>Esse é um teste.</p>
        </div>

        <footer>
          <button>
            <ThumbsUp /> Aplaudir <span>2</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
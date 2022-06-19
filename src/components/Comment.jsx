import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({content, onDeleteComment}){
  const [likeCount, setLikeCount] = useState(0)

  function handleNewLike(){
    setLikeCount(likeCount + 1)
  }
  
  function handleDeleteComment(){
    onDeleteComment(content)
  }

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
            <button 
              onClick={handleDeleteComment} 
              className={styles.buttonDelete} 
              title='deleteComment'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleNewLike}>
            <ThumbsUp /> Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
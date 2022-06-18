import { Avatar } from './Avatar'
import { Comment } from './Comment'
import {format, formatDistanceToNow} from 'date-fns';
import ptbr from 'date-fns/locale/pt-BR'
import styles from './Post.module.css' 


export function Post({author, publishedAt, content}){
  const publishedDate = format(publishedAt, "d 'de' MMMM 'às' HH:mm'h'", {
    locale: ptbr
  })

  const publishedRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptbr,
    addSuffix: true
  })


  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar imageAddress={author.image_url}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.office}</span>
          </div>
        </div>
        <time title={publishedDate} dateTime={publishedAt.toISOString()}>{publishedRelativeToNow}</time>

      </header>
      <div className={styles.content}>
        {content.map(line => {
          if(line.type === 'paragraph'){
            return <p>{line.content}</p>
          }else if(line.type === "link"){
            return <p><a href="">{line.content}</a></p>
          }
        })}
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe o seu comentario'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment></Comment>
        
      </div>
    </article>
  )
}
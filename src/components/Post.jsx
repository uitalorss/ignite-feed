import { Avatar } from './Avatar'
import { Comment } from './Comment'
import {format, formatDistanceToNow} from 'date-fns';
import ptbr from 'date-fns/locale/pt-BR'
import styles from './Post.module.css' 
import { useState } from 'react';


export function Post({author, publishedAt, content}){
  const [comments, setComments] = useState([
    'meus parabens!!'
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  function handleCreateNewComment(){
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(){
    setNewCommentText(event.target.value)
  }

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
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name='comment'
          placeholder='Deixe o seu comentario'
          value={newCommentText}
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment content={comment}/>
        })}
        
      </div>
    </article>
  )
}
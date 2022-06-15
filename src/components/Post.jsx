import styles from './Post.module.css'

export function Post(){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src='https://avatars.githubusercontent.com/u/15834173?v=4' alt="" />
          <div className={styles.authorInfo}>
            <strong>Uítalo Souza</strong>
            <span>Front-end Developer</span>
          </div>
        </div>
        <time title='14 de Junho de 2022 às 22:40' dateTime='2022-06-14 22:40:30'>Publicado há 1h</time>

      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="">jane.design/doctorcare</a></p>
        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>

    </article>
  )
}
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post";

import './global.css'
import styles from './App.module.css';

/*
Propriedades do post
Author: Imagem, Nome e cargo
data da publicação
conteúdo do post
*/

const posts = [
  {
    id: 1,
    author: {
      name: "Uítalo Souza",
      image_url: "https://github.com/uitalorss.png", 
      office: "Front-end Developer" 
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-06-11 19:00:00')
   },
   {
    id: 2,
    author: {
      name: "João das Neves",
      image_url: "https://github.com/uitalorss.png", 
      office: "Zé ninguém" 
    },
    content: [
      {type: 'paragraph', content: 'Isso é um teste'},
    ],
    publishedAt: new Date('2022-06-06 12:00:00')
   }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return(
              <Post
                key={post.id} 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
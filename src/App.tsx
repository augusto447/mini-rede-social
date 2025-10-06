import "./global.css";
import { Header } from "./Components/Header";
import styles from "./App.module.css";
import { Post } from "./Components/Post";
import augusto from "./assets/augusto.jpg";
import matias from "./assets/matias.jpg";

import type { PostType } from "./Components/Post";

const postList: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: augusto,
      name: "Augusto Manuel",
      role: "CTO @augumind",
    },

    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Cada projeto que compartilhamos aqui não é apenas código ou design, mas sim a prova de que a dedicação, o estudo e a criatividade podem transformar ideias em realidade. 💡",
      },
      { type: "link", content: "👉augustomanuel" },
    ],
    publishedAt: new Date("2025-09-15  1:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: matias,
      name: "Matias Henriques",
      role: "Programmer @augumind",
    },

    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "ola pessoal da tecnologia aqui em breve terei muitas novidades, mostrando o roadmap ideal para estudar programaçáo em 2025.Fica ligado porque teremos muita coisa de bom em breve 💡",
      },
      { type: "link", content: "👉matiashenriques" },
    ],
    publishedAt: new Date("2025-09-18 2:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main>
          {postList.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}

import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Avatar } from "./Avatar";
import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type InvalidEvent,
} from "react";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface content {
  type: "paragraph" | "link";
  content: string;
}

export interface PostType {
  author: Author;
  id: number;
  publishedAt: Date;
  content: content[];
  videos?: { platform: "youtube" | "facebook" | "vimeo"; url: string }[];
}
interface postProps {
  post: PostType;
}

export function Post({ post }: postProps) {
  const [comments, setComments] = useState(["Que post bem legal"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishDateFormatted = format(
    post.publishedAt,
    "d 'de' LLLL 'as' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publisheDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Este campo é obrigatorio");
  }

  function deleteComment(commentToDelete: string) {
    const commentWithouTheOne = comments.filter((comment) => {
      return comment != commentToDelete;
    });

    setComments(commentWithouTheOne);
  }

  const isNewCommentEmpty = newCommentText.length == 0;
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time
          title={publishDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {" "}
          {publisheDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {post.content.map((line) => {
          if (line.type == "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type == "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentArea}>
        <strong>Novo Post</strong>
        <textarea
          name="Comment"
          value={newCommentText}
          placeholder="O que você esta pensando?"
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}

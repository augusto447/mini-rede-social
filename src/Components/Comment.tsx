import styles from "./Comment.module.css";
import imgProfile from "../assets/meninaTi.jpg";
import { ThumbsUp, Trash } from "phosphor-react";

import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}
export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteCommment() {
    onDeleteComment(content);
  }

  function handleLikeCount() {
    setLikeCount((mesmo) => {
      return mesmo + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <img src={imgProfile} alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentText}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Manuela Ferndandes</strong>
              <span>Software Engeneer</span>
              <time title="07 de setembro as 13h" dateTime="2025-08-07">
                {" "}
                Cerca de 1h
              </time>
            </div>
            <button onClick={handleDeleteCommment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
          <div>
            <footer>
              <button onClick={handleLikeCount}>
                <ThumbsUp size={24} />
                Likes
                <span>{likeCount}</span>
              </button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

import styles from "./Header.module.css";
import wavesLogo from "../assets/wavesbook.svg";

export function Header() {
  return (
    <header className={styles.Header}>
      <img src={wavesLogo} alt="" />
      <span>Post</span>
    </header>
  );
}

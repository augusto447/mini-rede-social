import styles from "./Avatar.module.css";
import type { ImgHTMLAttributes } from "react";

interface Avatarprops extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: Avatarprops) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}

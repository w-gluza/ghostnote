import type { ReactNode } from "react";
import styles from "./Article.module.css";

type ArticleProps = {
  children: ReactNode;
};

export function Article({ children }: ArticleProps) {
  return <article className={styles.article}>{children}</article>;
}

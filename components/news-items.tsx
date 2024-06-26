import type { NextPage } from "next";
import styles from "./news-items.module.css";

export type NewsItemsType = {
  className?: string;
  photo?: string;
  prop?: string;
  sD?: string;
  prop1?: string;
};

const NewsItems: NextPage<NewsItemsType> = ({
  className = "",
  photo,
  prop,
  sD,
  prop1,
}) => {
  return (
    <div className={[styles.newsItems, className].join(" ")}>
      <img className={styles.photoIcon} loading="lazy" alt="" src={photo} />
      <div className={styles.newsDatesAndTitles}>
        <div className={styles.bg} />
        <div className={styles.div}>{prop}</div>
        <b className={styles.sd}>{sD}</b>
        <div className={styles.div1}>{prop1}</div>
      </div>
    </div>
  );
};

export default NewsItems;

import type { NextPage } from "next";
import NewsItems from "./news-items";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.newsContentWrapper, className].join(" ")}>
      <div className={styles.newsContent}>
        <div className={styles.newsHeader}>
          <b className={styles.b}>Новости компании</b>
        </div>
        <div className={styles.newsListContainer}>
          <div className={styles.newsList}>
            <NewsItems
              photo="/photo-1@2x.png"
              prop="7 апреля 2019"
              sD="Выбираем SD-карты для съемки"
              prop1="За исключением отсутствующей системы аэродинамического охлаждения, корпус этого ноутбука почти такой же."
            />
            <NewsItems
              photo="/photo-2@2x.png"
              prop="20 мая 2019"
              sD="Что представила Photokina"
              prop1="Ноутбук Zephyrus S (GX502) весит 2 кг, а корпус толщиной всего 18,9 мм позволяет легко уместить его в обычный рюкзак."
            />
            <NewsItems
              photo="/photo-3@2x.png"
              prop="14 июня 2019"
              sD="Новинка goPro Hero 5"
              prop1="Специальные «легкие» версии приложений для Android GO и отсутствие некоторых предустановленных программ."
            />
          </div>
          <div className={styles.newsButtonContainer}>
            <div className={styles.newsButtonContent}>
              <div className={styles.bg} />
              <button className={styles.newsButtonWrapper}>
                <div className={styles.bg1} />
                <b className={styles.b1}>Все новости</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;

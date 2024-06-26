import type { NextPage } from "next";
import styles from "./subscribe.module.css";

export type SubscribeType = {
  className?: string;
};

const Subscribe: NextPage<SubscribeType> = ({ className = "" }) => {
  return (
    <div className={[styles.subscribe, className].join(" ")}>
      <div className={styles.bg} />
      <div className={styles.subscriptionInfo}>
        <img className={styles.icon} loading="lazy" alt="" src="/icon.svg" />
        <b className={styles.b}>
          <p className={styles.p}>Подпишитесь</p>
          <p className={styles.p1}>на новости и акции</p>
        </b>
      </div>
      <div className={styles.emailInput}>
        <div className={styles.field}>
          <div className={styles.bg1} />
          <div className={styles.emailContainer}>
            <div className={styles.eMail}>Введите e-mail</div>
          </div>
          <div className={styles.btn}>
            <div className={styles.bg2} />
            <b className={styles.b1}>Подписаться</b>
          </div>
        </div>
      </div>
      <div className={styles.callRequest}>
        <div className={styles.callRequestInfo}>
          <img className={styles.phoneCallIcon} alt="" src="/phonecall.svg" />
          <b className={styles.b2}>Заказать звонок</b>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

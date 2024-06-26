import type { NextPage } from "next";
import styles from "./frame-component5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <div className={[styles.bgParent, className].join(" ")}>
      <div className={styles.bg} />
      <div className={styles.advantageIconsRow}>
        <div className={styles.listWrapper}>
          <img
            className={styles.listIcon}
            loading="lazy"
            alt=""
            src="/005list.svg"
          />
        </div>
        <div className={styles.div}>
          <p className={styles.p}>{`Самый большой `}</p>
          <p className={styles.p1}>выбор техники</p>
        </div>
      </div>
      <div className={styles.advantageIconsRow1}>
        <div className={styles.timeWrapper}>
          <img
            className={styles.timeIcon}
            loading="lazy"
            alt=""
            src="/001time.svg"
          />
        </div>
        <div className={styles.div1}>
          <p className={styles.p2}>{`Быстрое `}</p>
          <p className={styles.p3}>оформление заказа</p>
        </div>
      </div>
      <div className={styles.advantageIconsRow2}>
        <div className={styles.placeholderWrapper}>
          <img
            className={styles.placeholderIcon}
            loading="lazy"
            alt=""
            src="/004placeholder.svg"
          />
        </div>
        <div className={styles.div2}>
          <p className={styles.p4}>Можно забрать заказ</p>
          <p className={styles.p5}>в пункте выдачи</p>
        </div>
      </div>
      <div className={styles.advantageIconsRow3}>
        <div className={styles.productWrapper}>
          <img
            className={styles.productIcon}
            loading="lazy"
            alt=""
            src="/002product.svg"
          />
        </div>
        <div className={styles.div3}>
          <p className={styles.p6}>Доставка в любую</p>
          <p className={styles.p7}>точку Москвы</p>
        </div>
      </div>
      <div className={styles.commerceAndShoppingParent}>
        <img
          className={styles.commerceAndShoppingIcon}
          loading="lazy"
          alt=""
          src="/003commerceandshopping.svg"
        />
        <div className={styles.wrapper}>
          <div className={styles.div4}>
            <p className={styles.p8}>Оплата картой</p>
            <p className={styles.p9}>и наличными</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;

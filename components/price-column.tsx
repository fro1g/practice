import type { NextPage } from "next";
import styles from "./price-column.module.css";

export type PriceColumnType = {
  className?: string;
};

const PriceColumn: NextPage<PriceColumnType> = ({ className = "" }) => {
  return (
    <div className={[styles.priceColumn, className].join(" ")}>
      <div className={styles.priceRow}>
        <div className={styles.weekdayPriceParent}>
          <div className={styles.weekdayPrice}>
            <div className={styles.bg} />
            <div className={styles.div}>
              <p className={styles.p}>
                <span>
                  <b className={styles.b}>630</b>
                </span>
                <span>
                  <span>
                    {` `}
                    <span className={styles.span}>Р</span>
                  </span>
                </span>
              </p>
              <p className={styles.p1}>
                <span>
                  <span>Будний</span>
                </span>
              </p>
            </div>
          </div>
          <div className={styles.parent}>
            <div className={styles.div1}>
              <div className={styles.bg1} />
              <div className={styles.div2}>
                <p className={styles.p2}>
                  <span>
                    <b className={styles.b1}>4 380</b>
                  </span>
                  <span>
                    <span>
                      {` `}
                      <span className={styles.span1}>Р</span>
                    </span>
                  </span>
                </p>
                <p className={styles.p3}>
                  <span>
                    <span>Неделя</span>
                  </span>
                </p>
              </div>
            </div>
            <div className={styles.div3}>
              <div className={styles.bg2} />
              <div className={styles.div4}>
                <p className={styles.p4}>
                  <span>
                    <b className={styles.b2}>750</b>
                  </span>
                  <span>
                    <span>
                      {` `}
                      <span className={styles.span2}>Р</span>
                    </span>
                  </span>
                </p>
                <p className={styles.p5}>
                  <span>
                    <span>Выходной</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.div5}>
          <div className={styles.bg3} />
          <div className={styles.div6}>
            <p className={styles.p6}>
              <span>
                <b className={styles.b3}>12 250</b>
                <span>
                  {` `}
                  <span className={styles.span3}>Р</span>
                </span>
              </span>
            </p>
            <p className={styles.p7}>
              <span>
                <span>Месяц</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceColumn;

import type { NextPage } from "next";
import styles from "./frame-component6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <header className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.menuWrapper}>
                <div className={styles.menu}>
                  <div className={styles.menuItems} />
                  <div className={styles.menuItems1} />
                  <div className={styles.menuItems2} />
                </div>
              </div>
              <div className={styles.fotoprokatParent}>
                <a className={styles.fotoprokat}>fotoprokat</a>
                <a className={styles.companyName}>24</a>
              </div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.frameWrapper1}>
              <div className={styles.infoIconsRowParent}>
                <div className={styles.infoIconsRow}>
                  <img
                    className={styles.otherIcons}
                    alt=""
                    src="/other-icons.svg"
                  />
                  <a className={styles.a}>+7 495 170-39-18</a>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.div}>Круглосуточно</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.frameParent3}>
                <div className={styles.starParent}>
                  <img className={styles.starIcon} alt="" src="/star.svg" />
                  <div className={styles.number}>
                    <div className={styles.bg} />
                    <div className={styles.div1}>5</div>
                  </div>
                </div>
                <div className={styles.compareRowParent}>
                  <div className={styles.compareRow}>
                    <img
                      className={styles.compareIcon}
                      alt=""
                      src="/compare@2x.png"
                    />
                    <div className={styles.number1}>
                      <div className={styles.bg1} />
                      <div className={styles.count}>7</div>
                    </div>
                  </div>
                  <div className={styles.hover} />
                </div>
              </div>
              <div className={styles.shoppingCartParent}>
                <img
                  className={styles.shoppingCartIcon}
                  alt=""
                  src="/shoppingcart.svg"
                />
                <div className={styles.number2}>
                  <div className={styles.bg2} />
                  <div className={styles.div2}>2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.line} />
    </div>
  );
};

export default FrameComponent6;

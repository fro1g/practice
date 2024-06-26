import type { NextPage } from "next";
import PriceColumn from "./price-column";
import styles from "./frame-component4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <div
      className={[styles.popularProductsContentWrapper, className].join(" ")}
    >
      <div className={styles.popularProductsContent}>
        <div className={styles.wrapper}>
          <b className={styles.b}>Популярные товары</b>
        </div>
        <div className={styles.productColumnsParent}>
          <div className={styles.productColumns}>
            <div className={styles.productPair}>
              <div className={styles.powershotSx620HsCanonParent}>
                <div className={styles.powershotSx620HsContainer}>
                  <p className={styles.powershotSx620Hs}>
                    <b>PowerShot SX620 HS</b>
                  </p>
                  <p className={styles.canon}>Canon</p>
                </div>
                <PriceColumn />
              </div>
              <div className={styles.buttonColumn}>
                <div className={styles.buttonRow}>
                  <div className={styles.btn1}>
                    <div className={styles.bg} />
                    <b className={styles.b1}>Подробнее</b>
                  </div>
                  <button className={styles.btn2}>
                    <div className={styles.bg1} />
                    <div className={styles.cartButtonIcons}>
                      <img className={styles.cartIcon} alt="" src="/cart.svg" />
                    </div>
                    <b className={styles.b2}>В корзину</b>
                  </button>
                </div>
              </div>
              <div className={styles.imageColumn}>
                <div className={styles.bg2} />
                <img
                  className={styles.photoIcon}
                  loading="lazy"
                  alt=""
                  src="/photo@2x.png"
                />
                <img
                  className={styles.starIcon}
                  loading="lazy"
                  alt=""
                  src="/star-1.svg"
                />
                <img
                  className={styles.compareIcon}
                  alt=""
                  src="/compare-1.svg"
                />
              </div>
            </div>
            <div className={styles.left}>
              <div className={styles.bg3} />
              <img className={styles.bottomIcon} alt="" src="/bottom.svg" />
            </div>
          </div>
          <div className={styles.powershotSx620HsCanonGroup}>
            <div className={styles.powershotSx620HsContainer1}>
              <p className={styles.powershotSx620Hs1}>
                <b>PowerShot SX620 HS</b>
              </p>
              <p className={styles.canon1}>Canon</p>
            </div>
            <PriceColumn />
            <div className={styles.productActions}>
              <div className={styles.actionButtons}>
                <div className={styles.btn11}>
                  <div className={styles.bg4} />
                  <b className={styles.b3}>Подробнее</b>
                </div>
                <button className={styles.btn21}>
                  <div className={styles.bg5} />
                  <div className={styles.cartWrapper}>
                    <img className={styles.cartIcon1} alt="" src="/cart.svg" />
                  </div>
                  <b className={styles.b4}>В корзину</b>
                </button>
              </div>
            </div>
            <div className={styles.productImageContainer}>
              <div className={styles.bg6} />
              <img
                className={styles.orig2Icon}
                loading="lazy"
                alt=""
                src="/orig-2@2x.png"
              />
              <img className={styles.starIcon1} alt="" src="/star-1.svg" />
              <img
                className={styles.compareIcon1}
                alt=""
                src="/compare-1.svg"
              />
            </div>
          </div>
          <div className={styles.productColumns1}>
            <div className={styles.frameParent}>
              <div className={styles.powershotSx620HsCanonContainer}>
                <div className={styles.powershotSx620HsContainer2}>
                  <p className={styles.powershotSx620Hs2}>
                    <b>PowerShot SX620 HS</b>
                  </p>
                  <p className={styles.canon2}>Canon</p>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.parent}>
                    <div className={styles.div}>
                      <div className={styles.bg7} />
                      <div className={styles.div1}>
                        <p className={styles.p}>
                          <span>
                            <b className={styles.b5}>630</b>
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
                    <div className={styles.group}>
                      <div className={styles.div2}>
                        <div className={styles.bg8} />
                        <div className={styles.div3}>
                          <p className={styles.p2}>
                            <span>
                              <b className={styles.b6}>4 380</b>
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
                        <div className={styles.div4}>
                          <div className={styles.bg9} />
                          <div className={styles.div5}>
                            <p className={styles.p4}>
                              <span>
                                <b className={styles.b7}>750</b>
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
                      <div className={styles.div6}>
                        <div className={styles.bg10} />
                        <div className={styles.div7}>
                          <p className={styles.p6}>
                            <span>
                              <b className={styles.b8}>12 250</b>
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
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.btn1Parent}>
                  <div className={styles.btn12}>
                    <div className={styles.bg11} />
                    <b className={styles.b9}>Подробнее</b>
                  </div>
                  <button className={styles.btn22}>
                    <div className={styles.bg12} />
                    <div className={styles.cartContainer}>
                      <img
                        className={styles.cartIcon2}
                        alt=""
                        src="/cart.svg"
                      />
                    </div>
                    <b className={styles.b10}>В корзину</b>
                  </button>
                </div>
              </div>
              <div className={styles.bgParent}>
                <div className={styles.bg13} />
                <img
                  className={styles.origIcon}
                  loading="lazy"
                  alt=""
                  src="/orig@2x.png"
                />
                <img className={styles.starIcon2} alt="" src="/star-1.svg" />
                <img
                  className={styles.compareIcon2}
                  alt=""
                  src="/compare-1.svg"
                />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.bg14} />
              <img className={styles.topIcon} alt="" src="/top.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;

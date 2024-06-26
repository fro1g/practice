import type { NextPage } from "next";
import Component from "./component";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <section className={[styles.searchContainerWrapper, className].join(" ")}>
      <div className={styles.searchContainer}>
        <div className={styles.searchContent}>
          <div className={styles.searchPrompt}>
            <div className={styles.searchTitle}>
              <div className={styles.searchHeading}>
                <b className={styles.b}>Вы ищете что-то конкретное?</b>
              </div>
              <div className={styles.fotoprokat24Container}>
                <span>{`Проект `}</span>
                <span className={styles.fotoprokat24}>Fotoprokat24</span>
                <span>
                  {" "}
                  является агрегатором предложений всех фотопрокатов Москвы и
                  служит для Вашего удобства. Выберете необходимую категорию,
                  либо начните поиск по названию. Оформив заказ, Вы сможете
                  забрать его из Пункта Выдачи, либо заказать доставку в любую
                  точку Москвы.
                </span>
              </div>
            </div>
            <div className={styles.searchInputContainer}>
              <div className={styles.searchInputWrapper}>
                <div className={styles.inputAndButton}>
                  <div className={styles.bg} />
                  <button className={styles.catalogButtonContainer}>
                    <div className={styles.bg1} />
                    <b className={styles.b1}>Перейти в Каталог</b>
                  </button>
                </div>
                <div className={styles.btn2}>
                  <div className={styles.bg2} />
                  <b className={styles.b2}>Приступить к поиску</b>
                  <div className={styles.bgParent}>
                    <div className={styles.bg3} />
                    <input
                      className={styles.input}
                      placeholder="Поиск"
                      type="text"
                    />
                    <img
                      className={styles.search1Icon}
                      alt=""
                      src="/search-1.svg"
                    />
                  </div>
                </div>
                <div className={styles.closeButtonContainer}>
                  <img
                    className={styles.closeIcon}
                    loading="lazy"
                    alt=""
                    src="/close.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.promoBanners}>
          <div className={styles.promoBannerContainer}>
            <div className={styles.bannerItemsParent}>
              <div className={styles.bannerItems}>
                <img className={styles.photoIcon} alt="" src="/photo@2x.png" />
                <div className={styles.firstBannerPair}>
                  <div className={styles.bg4} />
                  <div className={styles.bg5} />
                  <b className={styles.canon3000Container}>
                    <p className={styles.canon}>Фотокамеры Canon</p>
                    <p className={styles.p}>от 3000 рублей</p>
                  </b>
                </div>
              </div>
              <div className={styles.fourthBannerPair}>
                <img className={styles.photoIcon1} alt="" src="/photo@2x.png" />
                <div className={styles.text}>
                  <div className={styles.bg6} />
                  <div className={styles.bg7} />
                  <b className={styles.b3}>
                    <p className={styles.p1}>Видеокамеры</p>
                    <p className={styles.p2}>по 200 рублей в сутки</p>
                  </b>
                </div>
                <div className={styles.fourthBannerItem}>
                  <div className={styles.bg8} />
                  <div className={styles.bg9} />
                  <b className={styles.b4}>
                    <p className={styles.p3}>Видеокамеры</p>
                    <p className={styles.p4}>по 200 рублей в сутки</p>
                  </b>
                </div>
              </div>
            </div>
            <Component
              photo="/photo@2x.png"
              prop="Лучшие объективы"
              prop1="по 700 рублей"
            />
          </div>
          <div className={styles.secondBannerItemsParent}>
            <Component
              photo="/photo@2x.png"
              prop="Товар недели"
              prop1="всего за 4000 рублей"
              propBackgroundImage="url('/photo@2x.png')"
              propWidth="350px"
              propWidth1="195px"
              propWidth2="138px"
            />
            <Component
              photo="/photo@2x.png"
              prop="Отличные фотокамеры"
              prop1="за 1500 рублей"
              propBackgroundImage="url('/photo@2x.png')"
              propWidth="350px"
              propWidth1="147px"
              propWidth2="217px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;

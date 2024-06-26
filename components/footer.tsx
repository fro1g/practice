import type { NextPage } from "next";
import styles from "./footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <section className={[styles.footer, className].join(" ")}>
      <div className={styles.bg} />
      <div className={styles.footerColumns}>
        <div className={styles.footerInfo}>
          <div className={styles.fotoprokatParent}>
            <h3 className={styles.fotoprokat}>fotoprokat</h3>
            <div className={styles.socialLinks}>24</div>
          </div>
          <div className={styles.div}>
            Самый удобный в Москве сервис аренды фото, видео и кинотехники
          </div>
        </div>
        <div className={styles.fotoprokat24}>© 2015 – 2019 Fotoprokat 24</div>
      </div>
      <div className={styles.footerColumns1}>
        <div className={styles.frameParent}>
          <div className={styles.facebookParent}>
            <img
              className={styles.facebookIcon}
              loading="lazy"
              alt=""
              src="/001facebook.svg"
            />
            <img
              className={styles.twitterIcon}
              loading="lazy"
              alt=""
              src="/002twitter.svg"
            />
            <img
              className={styles.vkIcon}
              loading="lazy"
              alt=""
              src="/003vk.svg"
            />
            <img
              className={styles.youtubeIcon}
              loading="lazy"
              alt=""
              src="/004youtube.svg"
            />
            <img
              className={styles.instagramIcon}
              loading="lazy"
              alt=""
              src="/005instagram.svg"
            />
          </div>
          <div className={styles.div1}>Политика конфиденциальности</div>
        </div>
      </div>
      <div className={styles.addressContainerWrapper}>
        <div className={styles.addressContainer}>
          <b className={styles.cityName}>+7 495 170-39-18</b>
          <div className={styles.div2}>г. Москва, Проспект мира, дом 12</div>
        </div>
      </div>
      <div className={styles.paymentMethodsWrapper}>
        <div className={styles.paymentMethods}>
          <img
            className={styles.visaIcon}
            loading="lazy"
            alt=""
            src="/visa.svg"
          />
          <img
            className={styles.mastercardIcon}
            loading="lazy"
            alt=""
            src="/mastercard.svg"
          />
          <div className={styles.robokassaContainer}>
            <img
              className={styles.robokassa13Icon}
              loading="lazy"
              alt=""
              src="/robokassa1-3.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

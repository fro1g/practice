import type { NextPage } from "next";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import Subscribe from "../components/subscribe";
import Footer from "../components/footer";
import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <FrameComponent6 />
      <div className={styles.homeInner}>
        <div className={styles.frameParent}>
          <div className={styles.bgParent}>
            <div className={styles.bg} />
            <div className={styles.bg1} />
          </div>
          <div className={styles.parent}>
            <h1 className={styles.h1}>
              <p className={styles.p}>Аренда Фото</p>
              <p className={styles.p1}>И видео</p>
              <p className={styles.p2}>оборудования</p>
            </h1>
            <h1 className={styles.h11}>Аренда</h1>
          </div>
        </div>
      </div>
      <img className={styles.forMapIcon} alt="" src="/for-map@2x.png" />
      <section className={styles.frameGroup}>
        <FrameComponent5 />
        <FrameComponent4 />
      </section>
      <FrameComponent3 />
      <FrameComponent2 />
      <div className={styles.btn2Hover}>
        <div className={styles.bg2} />
        <b className={styles.b}>Приступить к поиску</b>
      </div>
      <div className={styles.btn1Hover}>
        <div className={styles.bg3} />
        <div className={styles.bg4} />
        <b className={styles.b1}>Перейти в Каталог</b>
      </div>
      <FrameComponent1 />
      <FrameComponent />
      <section className={styles.background}>
        <img
          className={styles.headerIcon}
          loading="lazy"
          alt=""
          src="/header@2x.png"
        />
        <div className={styles.bg5} />
        <div className={styles.bg6} />
      </section>
      <Subscribe />
      <Footer />
      <div className={styles.additionalMenu}>
        <div className={styles.bg7} />
        <div className={styles.hover} />
        <div className={styles.line} />
        <div className={styles.div}>
          <div className={styles.div1}>Контакты</div>
          <div className={styles.div2}>Договор оферты</div>
          <div className={styles.div3}>Сотрудничество</div>
          <div className={styles.div4}>Новости</div>
          <div className={styles.div5}>О компании</div>
          <div className={styles.div6}>Вопросы и ответы</div>
          <div className={styles.div7}>Доставка и оплата</div>
          <div className={styles.div8}>Правила аренды</div>
          <div className={styles.div9}>Как это работает</div>
        </div>
        <div className={styles.div10}>
          <b className={styles.b2}>
            <span>•</span>
            <span className={styles.span}> Новинки в прокате</span>
          </b>
          <div className={styles.div11}>Аксессуары</div>
          <div className={styles.div12}>Специальное оборудование</div>
          <div className={styles.div13}>Для трансляций</div>
          <div className={styles.div14}>Звуковое оборудование</div>
          <div className={styles.div15}>Свет</div>
          <div className={styles.div16}>Операторское оборудование</div>
          <div className={styles.div17}>Оптика</div>
          <div className={styles.div18}>Камеры</div>
          <b className={styles.b3}>
            <span>•</span>
            <span className={styles.span1}> Каталог</span>
          </b>
        </div>
      </div>
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import BenefitsList from "./benefits-list";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.investmentContentWrapper, className].join(" ")}>
      <div className={styles.investmentContent}>
        <div className={styles.bg} />
        <div className={styles.investmentContainer}>
          <div className={styles.investmentHeader}>
            <div className={styles.investmentTitle}>
              <b className={styles.b}>Зарабатывайте вместе с нами</b>
            </div>
            <div className={styles.div}>
              Сдавайте свою технику через наш сервис, разместив её в каталоге, и
              получайте стабильную прибыль.
            </div>
          </div>
        </div>
        <div className={styles.benefitsContainer}>
          <BenefitsList
            prop="Доступный способ инвестировать"
            diamond="/diamond.svg"
          />
          <BenefitsList
            prop="Постоянный стабильный доход"
            diamond="/calendar6.svg"
          />
          <BenefitsList
            prop="Гарантии сохранности техники"
            diamond="/umbrella.svg"
          />
          <div className={styles.benefitsList}>
            <div className={styles.bg1} />
            <div className={styles.div1}>
              <p className={styles.p}>{`Прозрачные `}</p>
              <p className={styles.p1}>выплаты</p>
            </div>
            <div className={styles.viewWrapper}>
              <img
                className={styles.viewIcon}
                loading="lazy"
                alt=""
                src="/view.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.proposalContainer}>
          <div className={styles.proposalContent}>
            <div className={styles.bg2} />
            <button className={styles.proposalButtonContainer}>
              <div className={styles.bg3} />
              <b className={styles.b1}>Предложить свою технику</b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;

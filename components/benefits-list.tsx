import type { NextPage } from "next";
import styles from "./benefits-list.module.css";

export type BenefitsListType = {
  className?: string;
  prop?: string;
  diamond?: string;
};

const BenefitsList: NextPage<BenefitsListType> = ({
  className = "",
  prop,
  diamond,
}) => {
  return (
    <div className={[styles.benefitsList, className].join(" ")}>
      <div className={styles.bg} />
      <div className={styles.div}>{prop}</div>
      <div className={styles.benefitIcons}>
        <img
          className={styles.diamondIcon}
          loading="lazy"
          alt=""
          src={diamond}
        />
      </div>
    </div>
  );
};

export default BenefitsList;

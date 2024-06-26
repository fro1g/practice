import type { NextPage } from "next";
import PartnersList from "./partners-list";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section className={[styles.partnersContentWrapper, className].join(" ")}>
      <div className={styles.partnersContent}>
        <div className={styles.partnersHeader}>
          <b className={styles.b}>С кем мы работаем</b>
        </div>
        <div className={styles.partnersListContainer}>
          <PartnersList
            zoom="Фотопрокат Zoom"
            prop="Малая Ордынка, 25"
            httpzoomProkatru="http://zoom-prokat.ru"
          />
          <PartnersList
            zoom="Rental Photo"
            prop="Киркорова, 180/1"
            httpzoomProkatru="http://rentalphoto.com"
            propDisplay="inline-block"
            propMinWidth="100px"
            propDisplay1="inline-block"
            propMinWidth1="116px"
          />
          <PartnersList
            zoom="Panasonic Company"
            prop="Малая Ордынка, 25"
            httpzoomProkatru="http://zoom-prokat.ru"
            propDisplay="unset"
            propMinWidth="unset"
            propDisplay1="unset"
            propMinWidth1="unset"
          />
          <PartnersList
            zoom="Торговый Центр"
            prop="Киркорова, 180/1"
            httpzoomProkatru="http://rentalphoto.com"
            propDisplay="unset"
            propMinWidth="unset"
            propDisplay1="inline-block"
            propMinWidth1="116px"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;

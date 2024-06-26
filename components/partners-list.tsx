import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./partners-list.module.css";

export type PartnersListType = {
  className?: string;
  zoom?: string;
  prop?: string;
  httpzoomProkatru?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay1?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const PartnersList: NextPage<PartnersListType> = ({
  className = "",
  zoom,
  prop,
  httpzoomProkatru,
  propDisplay,
  propMinWidth,
  propDisplay1,
  propMinWidth1,
}) => {
  const zoomStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  return (
    <div className={[styles.partnersList, className].join(" ")}>
      <div className={styles.bg} />
      <div className={styles.partnersLogosAndNames}>
        <img
          className={styles.photographIcon}
          loading="lazy"
          alt=""
          src="/photograph.svg"
        />
        <b className={styles.zoom} style={zoomStyle}>
          {zoom}
        </b>
      </div>
      <div className={styles.partnerAddressesAndUrls}>
        <div className={styles.div} style={div1Style}>
          {prop}
        </div>
        <div className={styles.httpzoomProkatru}>{httpzoomProkatru}</div>
      </div>
    </div>
  );
};

export default PartnersList;

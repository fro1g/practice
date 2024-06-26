import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./component.module.css";

export type ComponentType = {
  className?: string;
  photo?: string;
  prop?: string;
  prop1?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propWidth2?: CSSProperties["width"];
};

const Component: NextPage<ComponentType> = ({
  className = "",
  photo,
  prop,
  prop1,
  propBackgroundImage,
  propWidth,
  propWidth1,
  propWidth2,
}) => {
  const divStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const photoIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const bgStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const bg1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div className={[styles.div, className].join(" ")} style={divStyle}>
      <img
        className={styles.photoIcon}
        alt=""
        src={photo}
        style={photoIconStyle}
      />
      <div className={styles.bgParent}>
        <div className={styles.bg} style={bgStyle} />
        <div className={styles.bg1} style={bg1Style} />
        <b className={styles.b}>
          <p className={styles.p}>{prop}</p>
          <p className={styles.p1}>{prop1}</p>
        </b>
      </div>
    </div>
  );
};

export default Component;

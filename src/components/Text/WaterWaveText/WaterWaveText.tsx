import styles from "./styles.module.scss";

const WaterWaveText = ({ children }: any) => {
  return (
    <div className={styles["content"]}>
      <h2>{children}</h2>
      <h2>{children}</h2>
    </div>
  );
};

export default WaterWaveText;

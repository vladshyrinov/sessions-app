import styles from "./Spinner.module.css";

export default function Spinner() {
  return (
    <div className={styles["spinner-container"]}>
      <div className={styles.spinner}></div>
      <span className={styles["sr-only"]}>Loading...</span>
    </div>
  );
}

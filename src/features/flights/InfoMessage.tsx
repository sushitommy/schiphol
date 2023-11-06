import styles from "./index.module.css";

function InfoMessage({ message }: { message: string }) {
  return <section className={styles.container}>{message}</section>;
}

export default InfoMessage;

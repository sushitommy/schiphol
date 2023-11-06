import styles from "./Hero.module.css";

function Hero({ children }: React.PropsWithChildren) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>{children}</div>
    </section>
  );
}

export default Hero;

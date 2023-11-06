import styles from "./Header.module.css";
import Logo from "./Logo";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Logo />
      </div>
    </header>
  );
}

export default Header;

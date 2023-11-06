/// <reference types="vite-plugin-svgr/client" />
import LogoSVG from "@assets/logo.svg?react";
import styles from "./Logo.module.css";

function Logo() {
  return <LogoSVG className={styles.logo} />;
}

export default Logo;

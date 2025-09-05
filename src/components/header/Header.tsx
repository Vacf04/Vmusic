import styles from "./Header.module.css";
import { BiMusic } from "react-icons/bi";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        VMusic <BiMusic />
      </h1>
    </header>
  );
}

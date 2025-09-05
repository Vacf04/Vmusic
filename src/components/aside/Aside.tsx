import Link from "next/link";
import styles from "./Aside.module.css";
import { BiHome, BiMusic, BiSearch, BiUser } from "react-icons/bi";

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <header>
        <span className={styles.titleAside}>Escute suas músicas favoritas</span>
      </header>
      <nav className={styles.menu}>
        <span className={styles.menuTitle}>Menu</span>
        <ul>
          <li>
            <Link href={`/`}>
              <BiHome />
              Home
            </Link>
          </li>
          <li>
            <Link href={`/pesquisa`}>
              <BiSearch />
              Pesquisa
            </Link>
          </li>
          <li>
            <Link href={`/musicas`}>
              <BiMusic />
              Musicas
            </Link>
          </li>
          <li>
            <Link href={`/artists`}>
              <BiUser />
              Artistas
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

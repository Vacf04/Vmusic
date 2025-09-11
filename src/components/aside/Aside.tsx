'use client';
import Link from 'next/link';
import styles from './Aside.module.css';
import { BiHome, BiMusic, BiSearch, BiUser } from 'react-icons/bi';
import { usePathname } from 'next/navigation';

export default function Aside() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <aside className={styles.aside}>
      <header>
        <h1>
          VMusic <BiMusic />
        </h1>
      </header>
      <nav className={styles.menu}>
        <span className={styles.menuTitle}>Menu</span>
        <ul>
          <li>
            <Link
              href={`/`}
              className={pathname === '/' ? styles.activeLink : ''}
            >
              <BiHome />
              Home
            </Link>
          </li>
          <li>
            <Link
              href={`/pesquisa`}
              className={pathname === '/pesquisa' ? styles.activeLink : ''}
            >
              <BiSearch />
              Pesquisa
            </Link>
          </li>
          <li>
            <Link
              href={`/musicas`}
              className={pathname === '/musicas' ? styles.activeLink : ''}
            >
              <BiMusic />
              Musicas
            </Link>
          </li>
          <li>
            <Link
              href={`/artistas`}
              className={pathname === '/artistas' ? styles.activeLink : ''}
            >
              <BiUser />
              Artistas
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

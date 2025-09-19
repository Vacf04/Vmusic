import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <section className={styles.notFound}>
      <h1>Página não encontrada</h1>
      <Link href="/">Volte para a home</Link>
    </section>
  );
}

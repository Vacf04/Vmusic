'use client';
import styles from './Error.module.css';

export default function Error({ errorMessage }: { errorMessage: string }) {
  return <div className={styles.error}>{errorMessage}</div>;
}

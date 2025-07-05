import Link from "next/link";
import styles from "./page.module.css";
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Basic routing</h1>
      <Link href="/login">Go to login page</Link>
      <Link href="/about">Go to about page</Link>
    </main>
  );
}

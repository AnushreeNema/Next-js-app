"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  return (
    <main className={styles.main}>
      <h1>Basic routing</h1>
      <Link href="/login">Go to login page</Link>
      <br />
      <br />
      <Link href="/about">Go to about page</Link>
      <br />
      <br />
      <button onClick={() => navigate("/login")}>Go to login Page </button>
      <button onClick={() => navigate("/about")}>Go to about page</button>
    </main>
  );
}

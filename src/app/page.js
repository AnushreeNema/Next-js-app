import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <User name="Anil" />
      <User name="peter" />
      <User name="sameer" />
      <h1>Home page</h1>
    </main>
  );
}

const User = (props) => {
  return (
    <div>
      <h2>user name is {props.name}</h2>
    </div>
  );
};

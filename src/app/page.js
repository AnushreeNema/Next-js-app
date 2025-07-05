import Image from "next/image";
import styles from "./page.module.css";
//Error: Event handlers cannot be passed to Client Component props.

//If you need interactivity, consider converting part of this to a Client Component.
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Events, function and state</h1>
      <button onClick={() => alert("hello next js")}>Click me</button>
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

"use client"; // always on type of file, on the child files of this file do not have to apply use client automatically applied
import styles from "./page.module.css";
import { useState } from "react";
//Error: Event handlers cannot be passed to Client Component props.

//If you need interactivity, consider converting part of this to a Client Component.
export default function Home() {
  const [name, setName] = useState("anil");
  const apple = () => {
    setName("sidhu");
  };
  return (
    <main className={styles.main}>
      <h1>Events, function and state {name}</h1>
      <button onClick={() => apple()}>Click me</button>
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

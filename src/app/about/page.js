"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
const About = () => {
  const router = useRouter();
  return (
    <div>
      <h1>page about about</h1>
      <button onClick={() => router.push("/")}>back to home </button>
      <br />
      <Link href="/about/aboutcollege">Go to about college page</Link>
      <br />
      <br />
      <Link href="/about/aboutstudent">Go to about student page</Link>
    </div>
  );
};

export default About;

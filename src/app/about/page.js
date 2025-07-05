"use client";
import { useRouter } from "next/navigation";
const About = () => {
  const router = useRouter();
  return (
    <div>
      <h1>about page</h1>
      <button onClick={() => router.push("/")}>Go to home page</button>
    </div>
  );
};
export default About;

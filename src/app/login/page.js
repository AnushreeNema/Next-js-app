"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();
  const navigate = (page) => {
    router.push("/login/" + page);
  };
  return (
    <div>
      <h1>login page</h1>
      <Link href="/">Go to Home page</Link>
      <br />
      <button onClick={() => navigate("loginstudent")}>
        Go to student Login Page
      </button>
      <br /> <br />
      <button onClick={() => navigate("loginteacher")}>
        Go to teacher Login Page
      </button>
    </div>
  );
};

export default Login;

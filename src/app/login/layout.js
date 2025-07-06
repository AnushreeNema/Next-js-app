import Link from "next/link";
import "./login.css";

export default function Layout({ children }) {
  return (
    <div>
      <h1>Common layout for login screens</h1>
      <ul className="login-menu">
        <li>
          <h4>Login navbar</h4>
        </li>
        <li>
          <Link href={"/login"}>Login Main</Link>
        </li>
        <li>
          <Link href="/login/loginstudent">Student Login</Link>
        </li>
        <li>
          <Link href="/login/loginteacher">Teacher Login</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}

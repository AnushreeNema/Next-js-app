import Link from "next/link";
export default function StudentList() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li>
          <Link href="/studentlist/Anil">Anil</Link>
        </li>
        <li>
          <Link href="/studentlist/2">Peter</Link>
        </li>
        <li>
          <Link href="/studentlist/3">Sam</Link>
        </li>
        <li>
          <Link href="/studentlist/4">Bhasker</Link>
        </li>
      </ul>
    </div>
  );
}

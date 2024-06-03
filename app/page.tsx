import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul>
        <li><Link href="/sample1.html">Sample1</Link></li>
        <li><Link href="/sample2.html">Sample2</Link></li>
      </ul>
    </main>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul>
        <li><Link href="slides/sample1">Sample1</Link></li>
        <li><Link href="slides/sample2">Sample2</Link></li>
      </ul>
    </main>
  );
}

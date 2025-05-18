'use client'
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Page Home</h1>
      <Link href="/signin">Sign in</Link>
    </div>
  );
}

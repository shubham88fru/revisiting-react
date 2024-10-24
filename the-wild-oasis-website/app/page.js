import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>The root page</h1>
      <Link href="/cabins">Explore Luxury cabins</Link>
    </div>
  );
}

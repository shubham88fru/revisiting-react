import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation />
      <h1>The root page</h1>;<Link href="/cabins">Explore Luxury cabins</Link>
    </div>
  );
}

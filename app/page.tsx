import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <Link href="/">
        <Image
          src={"/logo.svg"}
          alt="Varsha Logo"
          width={239}
          height={134}
          className="dark:invert"
        />
      </Link>
    </main>
  );
}

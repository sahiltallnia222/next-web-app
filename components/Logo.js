import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <>
      <Link href="/">
        <div className="w-24 relative h-16"><Image src='/images/logo.svg' fill={true} alt='Logo' priority={true} /></div>
      </Link>
    </>
  );
}

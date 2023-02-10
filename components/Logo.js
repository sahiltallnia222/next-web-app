import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <>
      <Link href="/">
        <div className="w-24 relative h-16 flex items-center justify-center">
          {/* <Image src='/images/logo.svg' fill={true} alt='Logo' priority={true} /> */}
          <p className="font-semibold text-3xl text-blue-500">LOGO</p>
          </div>
      </Link>
    </>
  );
}

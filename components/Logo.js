import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <>
      <Link href="/">
        <div className="w-36 relative h-12 flex items-center justify-center">
          <Image src='/images/logo.png' width={256} height={90} alt='Logo' priority={true} className='w-[200px] h-[50px]'/>
          {/* <p className="font-semibold text-3xl text-blue-500">LOGO</p> */}
          </div>
      </Link>
    </>
  );
}

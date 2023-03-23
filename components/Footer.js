import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="mt-5">
        <div className="dark:bg-[#1d2537] border-2 dark:border-none flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center p-5">
          <p className="text-center text-sm dark:text-white">Copyright © 2023 - All Right Reserved. Designed and Developed by  <span className="font-semibold"> WebVerse</span></p>
          <div className="flex items-center gap-5">
            <Link href='/' className="dark:text-white text-sm hover:underline">Feedback</Link>
            <Link href='/' className="dark:text-white text-sm hover:underline">Privacy Policy</Link>
            <Link href='/' className="dark:text-white text-sm hover:underline">Contact us</Link>
          </div>
        </div>
      </div>
    </>
  );
}

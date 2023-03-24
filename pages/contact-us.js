import styles from "styles/style.module.css";
import { GrMail } from "react-icons/gr";
import Link from "next/link";



export default function ContactUs() {
  return (
    <>
      <div className="lg:w-[64rem] mt-16 mx-auto w-full ">
        <div className=" text-white py-8 md:py-16 justify-center flex items-center px-4">
          <div className="text-4xl lg:w-2/3 md:w-2/3 xl:text-5xl lg:px-10 tracking-normal text-center font-semibold">
            <h1 className={styles.textGrad}>Send Your Feedback</h1>
          </div>
        </div>
        <div className="flex items-center justify-center dark:text-white flex-col">
            <GrMail size={'10em'}/>
            <p className="text-xl">Mail us - <Link href='mailto:sahiltallnia222@gmail.com' className="text-md text-blue-600 hover:underline">sahiltallnia222@gmail.com</Link></p>
        </div>
      </div>
    </>
  );
}

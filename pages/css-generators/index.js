import Link from "next/link";

export default function CSSGENS() {
  return (
    <>
      CSS GEN Home page
      <div>
        <Link href="/css-generators/box-shadow" className="hover:text-[#5340ff] p-1">
          Box shadow
        </Link>
      </div>
    </>
  );
}

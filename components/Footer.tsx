import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="mt-24 md:mt-48 pt-6 border-t border-zinc-300">
      <div className="relative flex justify-between items-center gap-6 ">
        <Image
          src="/logo.svg"
          alt="Seedly logo"
          width={44}
          height={44}
          className="w-7 md:w-9"
        />
        <div className="sm:absolute top-1/2 sm:-translate-y-1/2 left-1/2 sm:-translate-x-1/2 flex flex-wrap justify-center gap-x-4">
          <Link href="/privacy.html" className="text-[#6F6F77] text-sm">
            Privacy Policy
          </Link>
          <Link
            href="mailto:joinseedly@gmail.com?subject=Quick%20question&body=Hello,%20I%20have%20a%20question:"
            className="text-[#6F6F77] text-sm"
          >
            Contact Us
          </Link>
        </div>
        <Link href="https://twitter.com/Navdeepak_">
          <Image
            src="/x.svg"
            alt="Twitter logo"
            width={24}
            height={24}
            className="w-5 text-neutral-900"
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;

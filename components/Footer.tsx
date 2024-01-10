import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Image from "next/image";

function Footer() {
  return (
    <footer className="flex justify-between px-4 md:px-6 bg-gray-800 text-white p-8">
      <div className="flex-col items-start">
        <p className="mb-2">Follow us:</p>
        <div className="flex space-x-4">
          <Link
            href="https://twitter.com/Navdeepak_"
            className="text-white hover:text-gray-500"
          >
            <FaTwitter />
          </Link>
          <Link
            href="mailto:joinseedly@gmail.com?subject=Inquiry&body=Hello,%20I%20have%20a%20question."
            className="text-white hover:text-gray-500"
          >
            <MdOutlineMail />
          </Link>
        </div>
      </div>

      <div className="flex-col text-left">
        <h2 className="text-lg font-bold mb-4">Platform</h2>
        <ul className="list-none">
          <li className="mb-2">
            <Link href="/">Home</Link>
          </li>
          <li className="mb-2">
            <Link href="#getInfo">How It Works</Link>
          </li>
          <li>
            <Link href="mailto:joinseedly@gmail.com?subject=Inquiry&body=Hello,%20I%20have%20a%20question.">
              Contact Us
            </Link>
          </li>
          <a></a>
        </ul>
      </div>

      <div>
        <Link href="/">
          <Image src="/seedly-logo.svg" alt="Logo" width={60} height={60} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;

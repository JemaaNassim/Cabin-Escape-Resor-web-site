import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import { Autour_One } from "next/font/google";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        width={120}
        height="auto"
        priority
        alt="cabins resor logo"
      />
      <span className="text-lg font-semibold text-accent-100 hover:text-accent-600">
        Cabins Escape Resor
      </span>
    </Link>
  );
}

export default Logo;

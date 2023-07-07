import Link from "next/link";
import Image from "next/image";
import { BsBag, BsPerson } from "react-icons/bs";

const Navbar = () => {
  return (
    <header className="flex 2xl:px-[24rem] lg:px-16 px-6 py-3 bg-white justify-between items-center border-b  min-w-max">
      <Link href="/">
        <Image
          className="object-contain transition duration-100 hover:scale-[1.03]"
          src="logo.svg"
          height={96}
          width={192}
          alt="logo"
        />
      </Link>
      <nav>
        <ul className="flex 2xl:text-2xl text-xl items-center">
          <li className="flex px-4 h-12 border-r align-middle">
            <Link
              href="/"
              className="flex items-center gap-2 transition duration-100 hover:text-fuchsia-600 hover:scale-[1.05]"
            >
              <BsBag /> Cart
            </Link>
          </li>
          <li className="px-4">
            <Link
              href="/"
              className="flex items-center gap-2 transition duration-100 hover:text-fuchsia-600 hover:scale-[1.05]"
            >
              <BsPerson /> Account
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;


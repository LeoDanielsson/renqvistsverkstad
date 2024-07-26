import Nav from "./Nav";
import Link from "next/link";

const Header = () => (
  <header className="flex flex-col items-center py-6 bg-darkGreen pb-0">
    <Link href="/">
      <a className="text-3xl md:text-5xl text-center cursor-pointer text-white font-header leading-none mb-4 md:mb-8">
        Renqvists verkstad
      </a>
    </Link>
    <Nav />
  </header>
);

export default Header;

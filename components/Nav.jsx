import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

const links = [
  { href: "/", label: "Hem" },
  { href: "/program", label: "Program" },
  { href: "/utstallningar", label: "Utställningar" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/skogen", label: "Skulpturskogen Ed" },
];

const Nav = () => {
  const { pathname } = useRouter();
  return (
    <nav className="whitespace-nowrap">
      <ul className="m-0 flex justify-center flex-wrap list-none min-w-full">
        {links.map(({ href, label }) => (
          <li key={`${href}-${label}`} className="m-0">
            <Link href={href}>
              <a
                className={clsx(
                  "text-white py-2 px-4 no-underline block cursor-pointer",
                  pathname === href && "border-b-2 border-white"
                )}
              >
                {label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

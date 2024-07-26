import Link from "next/link";

const CtaLink = ({ href, inverted, children }) => (
  <Link href={href}>
    <a className="inline-flex items-center text-white cursor-pointer text-right py-2 leading-none border-b-2 border-white hover:text-gold hover:border-gold">
      {children}{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentcolor"
        width="1em"
        height="1em"
      >
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </a>
  </Link>
);

export default CtaLink;

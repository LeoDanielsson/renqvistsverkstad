import Link from "next/link";
import CtaLink from "./CtaLink";
import clsx from "clsx";

const Section = ({ title, image, children, link }) => (
  <section className="grid gap-x-8 mb-8 grid-cols-5" fullWidth={!image}>
    {title && (
      <h2 className="col-span-5">
        {link ? <Link href={link}>{title}</Link> : title}
      </h2>
    )}
    <div
      className={clsx(
        "mb-4",
        image != null ? "col-span-5 md:col-span-3" : "col-span-5"
      )}
    >
      {children}{" "}
      {link && <CtaLink href={link}>Klicka för att läsa mer</CtaLink>}
    </div>
    {image && (
      <div className="col-span-5 md:col-span-2">
        {link ? (
          <Link href={link}>
            <a>
              <img src={image} alt="" />
            </a>
          </Link>
        ) : (
          <img src={image} alt="" />
        )}
      </div>
    )}
  </section>
);

export default Section;

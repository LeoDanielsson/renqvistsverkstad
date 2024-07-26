import clsx from "clsx";

export default function Container({ children, className }) {
  return (
    <div className={clsx("max-w-6xl my-0 mx-auto py-8 px-4", className)}>
      {children}
    </div>
  );
}

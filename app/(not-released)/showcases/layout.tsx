import Link from "next/link";

export default function NotReleasedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <nav className="my-[35px]">
        <ul className="flex gap-[15px]">
          <li>
            <Link
              className="inline-flex px-[15px] py-[5px] rounded-md bg-slate-200"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="inline-flex px-[15px] py-[5px] rounded-md bg-slate-200"
              href="/showcases/buttons"
            >
              Buttons
            </Link>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}

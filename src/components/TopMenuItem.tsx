import Link from "next/link";

type TopMenuItemProps = {
  title: string;
  href: string;
};

export default function TopMenuItem({ title, href }: TopMenuItemProps) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-stone-500 transition hover:text-stone-900"
    >
      {title}
    </Link>
  );
}

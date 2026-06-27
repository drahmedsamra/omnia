import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function Button({
  href,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
    >
      {children}
    </Link>
  );
}
import Link from "next/link";

export default function Home() {
  const pages = [
    { href: "/auth/signup", label: "Sign up" },
    { href: "/auth/signin", label: "Sign in" },
    { href: "/hyderabad", label: "Hyderabad" },
    { href: "/mumbai", label: "Mumbai" },
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-slate-900">
          Welcome
        </h1>
        <div className="grid gap-3 sm:grid-cols-2">
          {pages.map((page) => (
            <Link
              className="rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              href={page.href}
              key={page.href}
            >
              {page.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

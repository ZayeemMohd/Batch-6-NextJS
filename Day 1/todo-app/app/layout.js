import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Taskora | Plan with purpose",
  description: "A calmer way to organize your day.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-slate-100 text-slate-900">
        <header className="sticky top-0 z-10 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
            <Link className="flex items-center gap-3" href="/">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-indigo-200">
                T
              </span>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Taskora
              </span>
            </Link>

            <div className="hidden items-center gap-1 md:flex">
              <NavLink href="/restaurants">Restaurants</NavLink>
              <NavLink href="/hyderabad">Hyderabad</NavLink>
              <NavLink href="/mumbai">Mumbai</NavLink>
            </div>

            <div className="flex items-center gap-2">
              <Link
                className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-indigo-600 sm:inline-block"
                href="/auth/signin"
              >
                Sign in
              </Link>
              <Link
                className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                href="/auth/signup"
              >
                Get started
              </Link>
            </div>
          </nav>
          <div className="flex gap-1 overflow-x-auto border-t border-slate-100 px-4 py-2 md:hidden">
            <NavLink href="/restaurants">Restaurants</NavLink>
            <NavLink href="/hyderabad">Hyderabad</NavLink>
            <NavLink href="/mumbai">Mumbai</NavLink>
            <NavLink href="/auth/signin">Sign in</NavLink>
          </div>
        </header>

        <div className="flex-1">{children}</div>

        <footer className="bg-slate-950 text-slate-300">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
            <div>
              <Link className="flex items-center gap-3 text-white" href="/">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 font-bold">
                  T
                </span>
                <span className="text-lg font-bold">Taskora</span>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
                Plan with purpose. Keep your tasks clear, focused, and moving
                forward.
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-white">Explore</h2>
              <div className="mt-4 space-y-3 text-sm">
                <FooterLink href="/restaurants">Restaurants</FooterLink>
                <FooterLink href="/hyderabad">Hyderabad</FooterLink>
                <FooterLink href="/mumbai">Mumbai</FooterLink>
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-white">Account</h2>
              <div className="mt-4 space-y-3 text-sm">
                <FooterLink href="/auth/signin">Sign in</FooterLink>
                <FooterLink href="/auth/signup">Create an account</FooterLink>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800">
            <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-slate-500 lg:px-8">
              © 2026 Taskora. Make room for what matters.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-600"
      href={href}
    >
      {children}
    </Link>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link className="block transition hover:text-white" href={href}>
      {children}
    </Link>
  );
}

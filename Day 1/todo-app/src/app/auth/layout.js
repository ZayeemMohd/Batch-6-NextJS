export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 px-4 py-3 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
          <p className="text-sm font-medium">
            <span className="mr-2 inline-block rounded-full bg-amber-300 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-amber-950">
              Limited time
            </span>
            Join today and get <strong>30% off</strong> your first month.
          </p>
          <p className="text-xs font-medium text-indigo-100">
            Use code <span className="font-bold text-white">WELCOME30</span> at checkout
          </p>
        </div>
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-3.5rem)] max-w-7xl items-center gap-8 px-4 py-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 lg:px-8">
        <aside className="hidden text-white lg:block">
          <div className="mb-6 inline-flex rounded-2xl bg-white/10 p-4 text-4xl shadow-lg ring-1 ring-white/15">
            🎁
          </div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
            A little extra for you
          </p>
          <h1 className="max-w-md text-4xl font-bold tracking-tight">
            Your best to-do list starts with a better plan.
          </h1>
          <p className="mt-4 max-w-md text-base leading-7 text-slate-300">
            Create your account today and unlock a smoother way to organize
            every important task.
          </p>
          <ul className="mt-8 space-y-4 text-sm text-slate-200">
            <li className="flex items-center gap-3">
              <span className="text-emerald-400">✓</span> Keep every task in one place
            </li>
            <li className="flex items-center gap-3">
              <span className="text-emerald-400">✓</span> Start free, upgrade when ready
            </li>
            <li className="flex items-center gap-3">
              <span className="text-emerald-400">✓</span> Cancel anytime
            </li>
          </ul>
        </aside>

        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
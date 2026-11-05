export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-red-600">
          Welcome, Home Page
        </h1>
        <div className="grid gap-3 sm:grid-cols-2">
          <PrimaryButton>Click me</PrimaryButton>

          <PrimaryButton props={"Hello world btn"} />
        </div>
      </div>
    </main>
  );
}

function PrimaryButton({ props, children }) {
  return (
    <div className="rounded-lg bg-red-600 px-4 py-3 font-semibold text-white">
      <button>
        {children} {props}
      </button>
    </div>
  );
}

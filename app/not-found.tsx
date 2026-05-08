import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-6 py-16">
      <p className="text-sm font-medium text-slate">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-ink">That project page does not exist.</h1>
      <p className="mt-4 text-base leading-8 text-slate">
        The route may have changed, or the page was never generated in the first place.
      </p>
      <Link href="/" className="mt-8 rounded-lg border border-line px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink">
        Back to home
      </Link>
    </main>
  );
}


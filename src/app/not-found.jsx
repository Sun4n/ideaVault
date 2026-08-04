import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl font-bold text-red-500">404</h1>

      <h2 className="mt-4 text-3xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-500 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-lg bg-cyan-500 px-6 py-3 text-white hover:bg-cyan-600 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
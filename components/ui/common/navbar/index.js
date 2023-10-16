import Link from "next/link";
import { useWeb3 } from "@/components/providers";

export default function Navbar() {
  const { connect, test } = useWeb3();

  return (
    <section>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between">
            <div>
              <Link
                href="/"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                href="/"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Marketplace
              </Link>
              <Link
                href="/"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Blogs
              </Link>
            </div>
            <div>
              <Link
                href="/"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Wishlist
              </Link>

              <Link
                href="/"
                className="rounded-md shadow font-medium mr-8 px-8 py-3 text-base text-white bg-indigo-600 hover:bg-indigo-800"
                onClick={connect}
              >
                Connect
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

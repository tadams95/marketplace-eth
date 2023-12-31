import Link from "next/link";
import { useWeb3 } from "@/components/providers";
import Button from "../button";
import { useAccount } from "@/components/hooks/web3/useAccount";
import { useRouter } from "next/router";

export default function Navbar() {
  const { connect, isLoading, isWeb3Loaded } = useWeb3();

  const { account } = useAccount();

  const { pathname } = useRouter();

  return (
    <section>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between items-center">
            <div>
              <Link
                href="/"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                href="/marketplace"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Marketplace
              </Link>
              <Link
                href="/blogs"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Blogs
              </Link>
            </div>
            <div>
              <Link
                href="/wishlist"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Wishlist
              </Link>
              {isLoading ? (
                <Button disabled={true} onClick={connect}>
                  Loading...
                </Button>
              ) : isWeb3Loaded ? (
                account.data ? (
                  <Button hoverable={false} className="cursor-default">
                    Welcome
                  </Button>
                ) : (
                  <Button onClick={connect}>Connect</Button>
                )
              ) : (
                <Button
                  onClick={() =>
                    window.open(
                      "https://www.coinbase.com/wallet/downloads",
                      "_blank"
                    )
                  }
                >
                  Install Wallet
                </Button>
              )}
            </div>
          </div>
        </nav>
      </div>
      {account.data && !pathname.includes("/marketplace") && (
        <div className="flex justify-end pt-1 sm:px-6 lg:px-8">
          <div className="text-white bg-indigo-600 rounded-md p-2">
            {account.data}
          </div>
        </div>
      )}
    </section>
  );
}

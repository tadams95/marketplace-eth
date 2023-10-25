import Navbar from "@/components/ui/common/navbar";
import Footer from "@/components/ui/common/footer";
import { Web3Provider } from "@/components/providers";
import Head from "next/head";

export default function BaseLayout({ children }) {
  return (
    <Web3Provider>
      <Head>
        <title>Marketplace</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4">
        <Navbar />
        <div className="fit">{children}</div>
      </div>
      <Footer />
    </Web3Provider>
  );
}

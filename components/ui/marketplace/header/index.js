import Breadcrumbs from "../../common/breadcrumbs";
import { EthRates, Walletbar } from "../../web3";

export default function Header() {
  return (
    <>
      <Walletbar />

      <EthRates />
      <div className="flex flex-row-reverse py-4 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs />
      </div>
    </>
  );
}

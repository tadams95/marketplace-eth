import { useEffect } from "react";
import useSWR from "swr";

const adminAddresses = {
  "0x60E1229dD08be81DdC24AB40E2BcaBe78F419ed6": true,
};

export const handler = (web3, provider) => () => {
  const { data, mutate, ...rest } = useSWR(
    () => {
      return web3 ? "web3/accounts" : null;
    },
    async () => {
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    }
  );

  useEffect(() => {
    provider &&
      provider.on("accountsChanged", (accounts) => mutate(accounts[0] ?? null));
  }, [mutate]);

  return {
    account: {
      data,
      isAdmin: (data && adminAddresses[data]) ?? false,
      mutate,
      ...rest,
    },
  };
};

import { useEffect } from "react";
import useSWR from "swr";

export const handler = (web3, provider) => () => {
  const { mutate, ...rest } = useSWR(
    () => {
      return web3 ? "web3/accounts" : null;
    },
    async () => {
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    }
  );
  // swrResponse.useEffect(() => {
  //   const getAccount = async () => {
  //     const accounts = await web3.eth.getAccounts();
  //     setAccount(accounts[0]);
  //   };

  //   web3 && getAccount();
  // }, []);

  useEffect(() => {
    provider &&
      provider.on("accountsChanged", (accounts) => mutate(accounts[0] ?? null));
  }, [mutate]);

  return {
    account: {
      mutate,
      ...rest,
    },
  };
};

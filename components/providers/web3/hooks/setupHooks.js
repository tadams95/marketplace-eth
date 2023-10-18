import { handler as createUseAccount } from "./useAccount";

export const setupHooks = (web3, provider) => {
  return {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useAccount: createUseAccount(web3, provider),
  };
};

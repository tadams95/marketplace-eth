import { handler as createAccountHook } from "./useAccount";
import { handler as createNetworkHook } from "./useNetwork";

export const setupHooks = (...deps) => {
  return {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useAccount: createAccountHook(...deps),
    useNetwork: createNetworkHook(...deps),
  };
};

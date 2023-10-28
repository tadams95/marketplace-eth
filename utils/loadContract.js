const NETWORK_ID = process.env.NEXT_PUBLIC_NETWORK_ID;

export const loadContract = async (name, web3) => {
  try {
    console.log("Fetching contract:", `/CourseMarketplace.json`);
    const res = await fetch(`/CourseMarketplace.json`);

    const Artifact = await res.json();

    const contract = new web3.eth.Contract(
      Artifact.abi,
      Artifact.networks[NETWORK_ID].address
    );

    return contract;
  } catch (error) {
    console.error(`Error loading contract ${name}:`, error);
    return null; // or handle error accordingly based on your requirements
  }
};

import MemberRole from '../artifacts/MemberRole.json';
import Web3 from 'web3';

export const windowObj = window as any;

export const loadAccount = async () => {
  const addressAccount = await windowObj.web3.eth.getCoinbase();
  return addressAccount;
};

export const loadContract = async () => {
  await loadWeb3();
  const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
  const memberRoleContract = new windowObj.web3.eth.Contract(
    MemberRole.abi,
    contractAddress,
  );
  windowObj.memberRoleContract = memberRoleContract;

  return memberRoleContract;
};

const loadWeb3 = async () => {
  // Modern dapp browsers...
  if (windowObj.ethereum) {
    windowObj.web3 = new Web3(windowObj.ethereum);
    try {
      // Request account access if needed
      await windowObj.ethereum.enable();
      // Acccounts now exposed
      windowObj.web3.eth.sendTransaction({
        /* ... */
      });
    } catch (error) {
      // User denied account access...
    }
  }
  // Legacy dapp browsers...
  else if (windowObj.web3) {
    windowObj.web3 = new Web3(windowObj.web3.currentProvider);
    // Acccounts always exposed
    windowObj.web3.eth.sendTransaction({
      /* ... */
    });
  }
  // Non-dapp browsers...
  else {
    alert('Non-Ethereum browser detected. Try installing MetaMask!');
  }
};

import { ethers } from 'ethers';
import SoulTranscendenceABI from './SoulTranscendenceABI.json';

export const CONTRACT_ADDRESS = "0xYourDeployedAddressHere";

const provider = new ethers.BrowserProvider(window.ethereum);
export const getContract = async (signer = false) => {
  const s = signer ? await provider.getSigner() : provider;
  return new ethers.Contract(CONTRACT_ADDRESS, SoulTranscendenceABI, signer ? s : provider);
};

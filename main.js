
async function connectWallet() {
  if (window.ethereum) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      document.getElementById("walletAddress").innerText = "Connected Wallet: " + address;
    } catch (error) {
      console.error(error);
      alert("Connection failed.");
    }
  } else {
    alert("Please install MetaMask!");
  }
}

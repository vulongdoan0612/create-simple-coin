import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    onechain2: {
      url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
      accounts: [process.env.PRIV_KEY],
    },
  },
  etherscan: {
    apiKey: {
      bscTestnet: "RDQ5BSBHVDV1W5XYZ6C8EKB5Y61XV7U8CX",
    },
  },
};


require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "https://eth-ropsten.alchemyapi.io/v2/TSgJAKNBDvml_CKnQNYkpZs36GhwB0d7";
const ALCHEMY_API_KEY_KOVAN = "https://eth-kovan.alchemyapi.io/v2/lrF-YgbT4E3EXvi1dqNdl-GWw1VHapAp";
const ALCHEMY_API_KEY_GOERLI = "https://eth-goerli.alchemyapi.io/v2/a0eG5OUj5mKCgUSEtPx_9HHCEvWVBHBl";
const ALCHEMY_API_KEY_RINKEBY = "https://eth-rinkeby.alchemyapi.io/v2/-tw-XdFtlZ1pmax41N8JE4QCSOPcuL3f";

const ROPSTEN_PRIVATE_KEY = "9e0ddace186dff8cdbccc0791a8d5e7862a2a58b0d5c6aeadb84f7e0b92de871";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
    networks: {
    rinkeby: {
      url: `${ALCHEMY_API_KEY_RINKEBY}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};


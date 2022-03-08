/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-waffle');

const INFURA_URL = 'https://rinkeby.infura.io/v3/b71c84a9ca754cd99703d212ae4287bc';
const PRIVATE_KEY = 'd55878384be5aacc497db207aec296a35d29457d6bb49c7dfbb2dfee054a3243';

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: INFURA_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};

const port = process.env.HOST_PORT || 9090

module.exports = {
  networks: {
    //     mainnet: {
    //       // Don't put your private key here:
    //       privateKey: process.env.PRIVATE_KEY_MAINNET || "0f84e57f01d3ee0512c859acf135d4184687de6bcf66c5ccf11f0f3880636506",
    //       /*
    // Create a .env file (it must be gitignored) containing something like

    //   export PRIVATE_KEY_MAINNET=4E7FEC...656243

    // Then, run the migration with:

    //   source .env && tronbox migrate --network mainnet

    //       */
    //       userFeePercentage: 100,
    //       feeLimit: 1000 * 1e6,
    //       fullHost: 'https://api.trongrid.io',
    //       network_id: '1'
    //     },
    //     shasta: {
    //       privateKey: process.env.PRIVATE_KEY_SHASTA || "0f84e57f01d3ee0512c859acf135d4184687de6bcf66c5ccf11f0f3880636506",
    //       userFeePercentage: 50,
    //       feeLimit: 1000 * 1e6,
    //       fullHost: 'https://api.shasta.trongrid.io',
    //       network_id: '2'
    //     },
    nile: {
      privateKey: "ac01240297c94862919e1373fda2cb79f0d978c18df81ee1f6d550bb438852e8",
      userFeePercentage: 100,
      feeLimit: 3000 * 1e6,
      fullHost: 'https://nile.trongrid.io',
      network_id: '3'
    },
    development: {
      // For tronbox/tre docker image
      privateKey: "ac01240297c94862919e1373fda2cb79f0d978c18df81ee1f6d550bb438852e8",
      userFeePercentage: 0,
      feeLimit: 1000 * 1e6,
      fullHost: 'http://127.0.0.1:' + port,
      network_id: '9'
    },
    compilers: {
      solc: {
        version: '0.5.4'
      }
    }
  },
  // solc compiler optimize
  solc: {
    //   optimizer: {
    //     enabled: true,
    //     runs: 200
    //   },
    //   evmVersion: 'istanbul'
  }
}

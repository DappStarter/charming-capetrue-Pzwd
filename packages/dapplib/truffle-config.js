require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remain history idea close broken twelve'; 
let testAccounts = [
"0xb29b6d69d4e30834958fc48d7baaa9108b4c437fe8135029aa0f9c0fb6d1b467",
"0x174b39e7ecce563b06595ca857789fa864028710ceea8ff56738faa3cde66056",
"0x1685635fcf0ea2388bcbb28542ca15713a747ee9e73611999666de3758190bbd",
"0x3241620c3b510208ad187bb5306e36dacbadf1a44e7710fa8be14f67471b5b34",
"0x5e106237baf54839ff795a336cf17e7b92602e6a65148f681401c0d95f0e6521",
"0x24b7608dda50cf8a904e8db1c821cb1a14e166213e2128f5b401fc522a70ec58",
"0xb05783c8f127d7d5e0362c5b29b70c9a7132c3a24a1ee863f6bffb6c5d6356ef",
"0x1af68d399cd34a19474995df8b1734c21776b9643711f61394c30e49e50b0e7b",
"0x22fe28ce742cb347364c78a73ae258801ad0d1e44ca82320de35b1cb63ee7690",
"0xd87851210666a3d5a81d1edb6596f631744b2eac8069f167046f3f20f2a5d347"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


const ethWallet = require('ethereumjs-wallet');

for(let index=0; index < 100; index++) {
    let addressData = ethWallet['default'].generate();
    document.write(`Private key = , ${addressData.getPrivateKeyString()}`);
    document.write("\n");
    document.write(`Address = , ${addressData.getAddressString()}`);
}



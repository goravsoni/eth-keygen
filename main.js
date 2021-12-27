const ethWallet = require('ethereumjs-wallet');
/* display private key & address */
for(let index=0; index < 1000; index++) {
    let addressData = ethWallet['default'].generate();
    console.log(`Private key = , ${addressData.getPrivateKeyString()}`);
    console.log(`Address = , ${addressData.getAddressString()}`);
}
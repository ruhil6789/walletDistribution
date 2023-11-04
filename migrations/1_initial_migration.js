// var Migrations = artifacts.require('Migrations');

// module.exports = function (deployer) {
//     deployer.deploy(Migrations);
// };

var Wallet = artifacts.require('Wallet');

const payees = [
    "TCubgyvvj6ELR3FLVVJwLvXNnzbzzGKFfm",
    "TDravg2cuBZZsDwWhZW1qKwvcHatBsQH39",


];

// const payees = [tronWeb.address.toHex('TDravg2cuBZZsDwWhZW1qKwvcHatBsQH39',
// tronWeb.address.toHex('TC4XiwfbZAFsJYUtjGaTeuqX831DXaL1Ru'),
// tronWeb.address.toHex('TNytVhbU2j6xktBLtZDka5a4R7F2z63aNS'),
// tronWeb.address.toHex('TNkxxKF6wJoWEds273rULFpoba6aBd7uNw'),
// tronWeb.address.toHex('TEgZKTD3QLmWXqub1ffaxbXYWtDmd7uECb')
// )];
// const payees = [TDC5pkxZLUQbp3pEYdd8E1d6VZuyF4S5Zb];

const shares = [10, 20];
//const shares=[90];

module.exports = function (deployer) {

    deployer.deploy(Wallet, payees, shares);

};
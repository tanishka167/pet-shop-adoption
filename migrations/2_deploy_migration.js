// import "truffle/Assert.sol";
// import "truffle/DeployedAddresses.sol";
// import "../contracts/Adoption.sol";

var Adoption = artifacts.require("Adoption");

module.exports = function(deployer) {
  deployer.deploy(Adoption);
};

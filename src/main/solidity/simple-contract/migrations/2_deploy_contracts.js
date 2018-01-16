var ProofOfExistence1 = artifacts.require("./ProofOfExistence1.sol");
/*
 *  * migrations/2_deploy_contracts.js:
 *   */
module.exports = function(deployer) {
// add this line
  deployer.deploy(ProofOfExistence1);
};

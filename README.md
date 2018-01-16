# blockchain-java
a simple project to access blockchain ethereum from java with web3j

# Requirements
Web3j command line tool must be installed. Please see https://docs.web3j.io/command_line.html


# Smart contracts
## Testrpc
Start testrpc
## Truffle 
 cd src/main/solidity/simple-contract/ && truffle migrate
## Truflle console
Test with : cd src/main/solidity/simple-contract/ && truffle console 
$> truffle console
truffle(development)> var poe = ProofOfExistence1.at(ProofOfExistence1.address)
undefined
truffle(development)> poe.address
'0xc94a23fd1b8576ce9b9eb0f15bf56c88a4309d4b'



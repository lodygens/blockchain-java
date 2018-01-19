# blockchain-java
A simple project to access blockchain ethereum from java with web3j

# Requirements

Ethereum client and Web3j must be locally installed

## Ethereum client

Please follow [The Hitchhiker’s Guide to Smart Contracts in Ethereum](https://blog.zeppelin.solutions/the-hitchhikers-guide-to-smart-contracts-in-ethereum-848f08001f05) to install all expected tools.
 
In order to ease this tutorial, this repository includes the smart contract from The Hitchhiker’s Guide, in the [src/main/solidity/simple-contract](src/main/solidity/simple-contract) directory.

## Web3j
The Web3j library permits to interact with blockchain from java program.

The library is available from their web site: [Web3j](https://web3j.io).
Don't forget to install the [Web3j command line tools](https://docs.web3j.io/command_line.html).


# Usage

## Install

To compile and install :
```
grade shadowJar
```


## Create a wallet

To create a wallet :
```
web3j wallet create
```


## Test the contract

### Start a Geth local network

First start a geth node

Please see https://github.com/iExecBlockchainComputing/PoCo/blob/master/v2plan/README.md#choice-2--prepare-local-geth-node

```
docker run -d --name iexec-geth-local --entrypoint=./startupGeth.sh -p 8545:8545 iexechub/iexec-geth-local
```

### Test with truffle
```
truffle console

truffle(development)> var poe = ProofOfExistence3.at(ProofOfExistence3.address)
undefined

truffle(development)> poe.checkDocument('hello')
false

truffle(development)> poe.notarize('hello')
...

truffle(development)> poe.checkDocument('hello')
true

```

## Run

To run :
```
java -cp java -cp build/libs/web3j-contract-all.jar AccessContract  yourWalletFilePath yourWalletPassword anyString
```

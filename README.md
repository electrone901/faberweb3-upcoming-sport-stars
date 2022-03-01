## Project name

Sports Stars

## Description

Sports Stars is a decentralized fundraising app that allows fans to support their favorite upcoming sports stars. This app allows young athletes to share their idea or goal to find a coach, funders, or a community that they would like to be part of.

Main Features:

- Allows users to register their projects or goals
- Players would be able to receive tokens and NFTs
- Early supporters should able to buy and sell users' tokens.
- Anyone can donate NFTs to other users
- Easily collect funds from backers using blockchain.

### Link Demo Website

- https://faberweb3-upcoming-sport-stars.netlify.app/

### Video Demo

- https://youtu.be/wGlq_mTWM20

### Team members

- UserName: electrone
- Email address: marcial.arturo@yahoo.com

## Usage of IPFS and Filecoin storage services

Upcoming Sports Stars application makes use of IPFS NFTStorage to stored NFT's image, name, location, goals and metadata. The way it work is whenever the user is registering an idea, project or goal the information get pass to NFTStorage IPFS then the NFTStorage generates a hash called CID that is store on the smart contract. The CID will be used to retrieve the NFT's data.

## Link to the publicly visible source code repository

https://github.com/electrone901/faberweb3-upcoming-sport-stars

![Main Page](https://raw.githubusercontent.com/electrone901/faberweb3-upcoming-sport-stars/main/preview.png)

### Upcoming Sports Stars application makes use of the following software:

Polygon, Matic Network: the network I deployed the app.

Covalent API for a quick way to fetch and retrieve NFTs from a wallet address.
​​
NFTPort for multi-chain NFT minting, and data transparency such as distributing rewards and minting the NFT.

NFTStorage: the data is stored on NFTStorage IPFS, the generated hash (CID) will be used to view the details and to retrieve the NFT.

Solidity: Solidity was used for the smart contract together with OpenZeppelin ERC721 for faster development of the smart contract

Ganache: for local blockchain development

Frontend: React Js for the frontend, Material-UI, and Web3 to connect to the blockchain.

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

## Future Features:

- Post updates
- Upon registration, get your own token

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

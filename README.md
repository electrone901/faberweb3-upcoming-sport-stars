
## Project name

Sports Stars

## Description
Sports Stars is a decentralized fundraising app that allows fans to support their favorite upcoming sports stars. Upon registration, a player is able to receive tokens, early supporters are able to buy and sell their tokens. Share that awesome idea-goal you have been sleeping on for a while so you can find awesome couches or funders to help you create it or discover great athletes from others that you would like to be part of as a funder.

### Link Demo Website

- https://faberweb3-upcoming-sport-stars.netlify.app/

### Video Demo

- https://youtu.be/TuEYSEvJ9as

### Team members
- UserName: electrone
- Email address: marcial.arturo@yahoo.com


## Usage of IPFS and Filecoin  storage services
Upcoming Sports Stars application makes use of IPFS NFTStorage to stored NFT's image, name, location, goals and metadata.  The way it work is whenever the user is registering an idea, project or goal the information get pass to NFTStorage IPFS then the NFTStorage generates a hash called CID that is store on the smart contract. The CID will be used to retrieve the NFT's data.


## Link to the publicly visible source code repository

Provide comprehensive README, incl. a clear description of the work and mention of how our tech is used in the Technologies Used section of README.
Include a link to the working demo or provide a testing guide.
3. Showcase

2-3 minute video that presents the idea, including a brief demo that demonstrates the use of IPFS and/or Filecoin or anything that builds on top of them. Videos must be uploaded to YouTube, Vimeo, or Facebook Video and made public.
To be eligible for the business award, the project should present a simple one-pager presenting the team, confirming that at least one member is resident in the European Union and describing the business opportunity, potential market, and go-to-market strategy.
NOTE:

Submitting the same project across multiple hackathons will lead to disqualification.
Only projects or features (preferably in a separate branch) built specifically for the respective hackathon will be considered for prizes.
Broken links may disqualify the project from the judging process.
Using an IPFS HTTP gateway doesn’t count as building on top of IPFS. Exclusively basing your submission on that does not make you eligible for prizes.



![Main Page](https://raw.githubusercontent.com/electrone901/upcoming-sports-stars/unstoppable-domains/preview.png)

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

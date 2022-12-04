# Welcome to Aguadulce dapp

Follow [link](https://aguadulce-dapp.netlify.app/) to view live project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How To Run

1. Clone the repo using the command below:

`git clone git@github.com:Aquilaafuadajo/aguadulce-dapp.git`

2. go into the projects root folder and run the following command:

`npm install`

3. Make sure you have the truffle, ganache and metamask extension installed on machine.

- follow [link](https://trufflesuite.com/docs/truffle/how-to/install/) to install truffle on machine
- follow [link](https://trufflesuite.com/ganache/) to install ganache
- follow [link](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en) to install metamask extension on your browser.

4. Run Ganache and configure metamask to use ganache local network. Here's a great [article](https://coinsbench.com/connect-to-metamask-from-new-or-existing-web-application-with-truffle-and-ganache-f48aa763c0ac) on how to do this.

5. Run the following command to deploy contract to the local test network

`truffle compile`
`truffle migrate --reset`

6. Copy the contract address from the console and paste in the .env file like below:

`REACT_APP_CONTRACT_ADDRESS=THE_ADDRESS_YOU_COPIED`

7. Run the `npm start` to start the application.

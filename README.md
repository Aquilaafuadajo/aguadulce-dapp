# Welcome to Aguadulce dapp

Follow [link](https://aguadulce-dapp.netlify.app/) to view live project

## How To Run

1. Install truffle following the link below

- follow [link](https://trufflesuite.com/docs/truffle/how-to/install/) to install truffle on machine

2. Clone the repo using the command below:

`git clone git@github.com:Aquilaafuadajo/aguadulce-dapp.git`

3. Go to the project root folder and run the following command to boot ganache

`cd ganache`
`docker-compose up --build`

4. Deploy your contract using the command below:

`truffle migrate --reset`

5. Go into the root folder and copy the contract address from the terminal and paste in docker-compose.yml file

`REACT_APP_CONTRACT_ADDRESS: THE_ADDRESS_YOU_COPIED`

6. Finally run `docker-compose up --build` to start the application

7. go to localhost:3003 to view application

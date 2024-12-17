# Pet Adoption DApp
This is a decentralized application (DApp) that allows users to adopt pets through the Ethereum blockchain. It interacts with a smart contract to facilitate the adoption process, showing a list of available pets and enabling users to adopt them by sending a transaction to the blockchain.

# Features
View a list of available pets with their details.
Adopt pets by interacting with the smart contract.
Check the adoption status of pets.
The UI updates automatically to reflect adopted pets and disables the adoption button for adopted pets.
# Requirements
To run this DApp, you need:

•	MetaMask (or any other Ethereum wallet extension).

•	Ganache (or any local Ethereum network).

•	A Truffle project with the Adoption smart contract deployed on your local Ethereum network.
# Installation
Step 1: Set Up Your Development Environment

open command prompt

•	Clone the repository:

git clone https://github.com/your-username/pet-adoption-dapp.git
cd pet-adoption-dapp

•	Install dependencies:

Ensure that you have Node.js and npm installed, then run:

npm install

•	Start Ganache (or your Ethereum local network):

Make sure your Ganache instance is running on http://localhost:7545 (or update the provider URL accordingly).

•	Deploy the smart contract:

In the project directory, run the following to deploy the smart contract to your local blockchain using Truffle:

truffle migrate

Step 2: Set Up Frontend

Open the index.html file and modify the path to pets.json or any other data source you'd like to use.

Run the frontend by opening index.html in a browser.

Step 3: Interact with MetaMask

Open MetaMask and connect it to the same local Ethereum network (Ganache, for example).
Ensure that the account you’re using has some ETH (you can get test ETH from Ganache or any other test network).

# How It Works
1. Display Available Pets
The application loads a list of available pets from a pets.json file and displays them on the page. Each pet has details such as name, breed, age, and location, along with an "Adopt" button.

2. Adopt a Pet
When a user clicks the "Adopt" button, the application calls the adopt(petId) function from the Adoption smart contract. The user's Ethereum wallet (e.g., MetaMask) will ask for confirmation to send a transaction to the blockchain.
Once the adoption is confirmed, the pet's status is updated on the front end, and the adoption button is disabled for that pet.

3. Mark Adopted Pets
Once a pet has been adopted, the application updates the button to show "Success" and disables it for that pet.

# Code Structure

•	app.js: Main JavaScript file handling the web3 connection, smart contract interaction, and UI updates.

•	pets.json: A sample data file containing information about pets available for adoption.

•	Adoption.json: The ABI (Application Binary Interface) for the deployed smart contract.

•	index.html: The HTML structure of the front-end user interface.

•	Truffle smart contract: Located in the contracts/Adoption.sol file. It defines the smart contract logic for adopting pets.
# Troubleshooting
•	MetaMask not opening: Ensure that MetaMask is installed and connected to the right Ethereum network (Ganache or another test network).

•	Pop-up not showing after adoption: Ensure that the pop-up code is properly implemented in the handleAdopt function.

•	No pets appearing: Check the pets.json file for valid data or ensure the contract is deployed correctly.



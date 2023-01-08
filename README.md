# GitHub Integration App
This app allows users to authenticate with their GitHub account and create a new repository with sample code.

## Prerequisites
1. Node.js and npm
2. A GitHub account


## Setup
1. Clone this repository to your device.
2. Navigate to the project directory: `cd github-integration-app`
3. Install the dependencies: `npm install`
4. Create a new OAuth application on GitHub and copy the client id and client secret.
5. Create a file named .env in the root of the project and add the following lines:
    CLIENT_ID=YOUR_CLIENT_ID
    CLIENT_SECRET=YOUR_CLIENT_SECRET
    JWT_SECRET=YOUR_JWT_SECRET
6. Replace YOUR_CLIENT_ID and YOUR_CLIENT_SECRET with the values copied from GitHub, and generate a random string manually or using random string generator TO replace it with YOUR_JWT_SECRET.
7. Start the app: `npm start`
8. Open http://localhost:8000 in your browser


## Usage
1. Click the "Authorize GitHub" button to authenticate with your GitHub account.
2. Click the "Create Repository" button and enter the repository name.
3. If the repository was successfully created, a success message will be displayed.

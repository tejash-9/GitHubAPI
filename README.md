# GitHub Integration App
This app allows users to authenticate with their GitHub account and create a new repository with sample code.

## Prerequisites
1. Node.js and npm
2. A GitHub account


## Setup
1. Clone this repository to your device.
2. Navigate to the project directory: `cd GitHubAPI`
3. Install the dependencies: `npm install`
4. Create a new OAuth application on GitHub and copy the client id and client secret.
5. Set the homepage url to http://localhost:8000 and Authorization callback url to http://localhost:8000/auth/callback.
6. Create a file named .env in the root of the project and add the following lines:

    CLIENT_ID=YOUR_CLIENT_ID
    
    CLIENT_SECRET=YOUR_CLIENT_SECRET
    
    JWT_SECRET=YOUR_JWT_SECRET
    
7. Replace YOUR_CLIENT_ID and YOUR_CLIENT_SECRET with the values copied from GitHub, and generate a random string manually or using random string generator to replace it with YOUR_JWT_SECRET.
8. Start the app: `npm start`
9. Open http://localhost:8000 in your browser


## Usage
1. Click the "Authorize GitHub" button to authenticate with your GitHub account.
2. On successfull authentication, it will redirect to the home page.
3. Click the "Create Repository" button and enter the repository name.
4. If the repository was successfully created, a success message will be displayed.
5. Otherwise, it will display an error message saying autentication failed.

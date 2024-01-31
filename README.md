# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

### Version Control Setup

We follow a version control strategy to manage our project's codebase efficiently. Here's an overview of our version control setup:

1. **Version Control Strategy:**
   - We utilize the [GitHub Flow](https://guides.github.com/introduction/flow/) as our version control strategy. This approach emphasizes short-lived branches, continuous integration, and frequent releases.

2. **Initial Development Branch:**
   - Our initial development branch is named `development`. All feature branches are created from and merged back into this branch during the development process.

3. **Branch Protection Rules:**
   - To ensure code quality and prevent accidental disruptions to the main branch (`main`), we've set up branch protection rules for the `main` branch. These rules include:
      - **Require pull request reviews before merging:** At least one approving review is required before a pull request can be merged.
      - **Require status checks to pass:** Ensure that continuous integration tests and other checks pass before merging.
      - **Include administrators:** Even administrators must follow the same process to merge changes.

By following this version control strategy, we aim to maintain a clean and stable main branch while allowing for efficient collaboration and feature development in parallel branches.

For more details on our branching model and workflow, please refer to our [Contribution Guidelines](./CONTRIBUTING.md).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

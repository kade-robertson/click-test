# Click Test

Basic Electron app to test click / touch behaviour and event ordering.

For ideal "click" / single touches, the event order should be as follows.

1. pointer-down
2. touch-start
3. pointer-up
4. pointer-leave
5. touch-end
6. click

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using [cra-template-typescript-electron](https://github.com/vixalie/cra-template-typescript-electron) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Electron will start automaticly when dev server is ready and [http://localhost:3000](http://localhost:3000) can be visited.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Electron will restart automaticly when you modified files in `src-main` directory.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

DO NOT run this command directly, it is not enough to distribute a application only by building the renderer.

### `yarn dist:*`

Distribute application to the `dist` folder. `*` can be replace by `win`, `mac` or `linux`. It will build the renderer and main scripts, and then use [electron-builder](https://www.electron.build/) to package them into distributable.

### `yarn fix:electron`

When you encountered the error called 'Electron failed to install correctly', you will need this command to reinstall Electron module.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

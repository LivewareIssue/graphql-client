Install NVM
`sudo apt update`
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/refs/heads/master/install.sh | bash`

Install the latest version of NodeJS
`nvm install`

Install the Yarn package manager
`npm install --global yarn`

Create an empty Yarn package
`yarn init`

## Babel
`yarn add -D @babel/core @babel/preset-env`
`yarn add -D @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties`

## TypeScript
`yarn add -D typescript`
`yarn add -D @babel/preset-typescript`

## React
`yarn add react react-dom react-relay`
`yarn add -D @babel/preset-react`
`yarn add -D @types/react @types/react-dom @types/react-relay @types/react-router-dom`

## Webpack
`yarn add -D webpack webpack-cli webpack-dev-server`
`yarn add -D html-webpack-plugin file-loader`
`yarn add -D babel-loader`

## Relay
`yarn add -D relay-compiler graphql`
`yarn add -D babel-plugin-relay`

## StyleX
`yarn add -D @stylexjs/babel-plugin @stylexjs/webpack-plugin @stylexjs/eslint-plugin`

## React router
`yarn add react-router-dom`
`yarn add @loop-payments/react-router-relay`
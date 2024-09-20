# Install NVM
> sudo apt update
> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/refs/heads/master/install.sh | bash

# Install the latest version of NodeJS
> nvm install

# Install the Yarn package manager
> npm install --global yarn

# Create an empty Yarn package
> yarn init

# Babel
> yarn add -D @babel/core @babel/preset-env
> yarn add -D @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties

# TypeScript
> yarn add -D typescript

## TypeScript / Babel preset
> yarn add -D @babel/preset-typescript

# React
> yarn add react react-dom react-relay

## React / Babel preset
> yarn add -D @babel/preset-react

## React / Typescript support
> yarn add -D @types/react @types/react-dom @types/react-relay

# Webpack
> yarn add -D webpack webpack-cli webpack-dev-server
> yarn add -D html-webpack-plugin file-loader

## Webpack / Babel loader
> yarn add -D babel-loader

# Relay
> yarn add -D relay-compiler graphql

## Relay / Babel plugin
> yarn add -D babel-plugin-relay

# StyleX
> yarn add -D @stylexjs/babel-plugin @stylexjs/webpack-plugin @stylexjs/eslint-plugin
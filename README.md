# Introduction

A desktop application to manage your local video streaming.

# Features

1. Browse to find the video you want to play.
2. The video you play will be added to recents list.
3. Mark the video as watched in your recents list.
4. Play a random video from a folder.

# Screenshots

## Home

![](https://drive.google.com/uc?export=download&id=1jpsP-7vKsC4QpCqfGOL0q9M16FEkIHu3)

## Settings

![](https://drive.google.com/uc?export=download&id=1RnvezaLzpqkU22JusnJFSzuaxx20QYiY)

# Usage

## Requirements

1. Install Node.js.
2. Run `npm install` in the root directory to install dependencies.

## Set up .env

Make a .env file in root directory. An example configuration:

```
MODE=debug
DEBUG_URL=http://localhost:3000/
DEBUG_DATA_PATH=path\to\data\directory
```

MODE can be-

1. debug: Render contents from URL location specified by DEBUG_URL. This allows fast debugging otherwise we would have to build the React app everytime. One can separately serve a react app on the localhost which supports auto reload whenever files change.
2. production: Render contents from react build output.

DEBUG_DATA_PATH represents the directory where app data will be saved while in debugging mode so that you can use the application and develop simultaneously while keeping the data separated.

## Launch app in debug mode

1. Configure .env for debug as described in the previous section.
2. Use command `npm run react-start` to run react dev server and host the react app.
3. Use command `npm run electron-start` to launch the app which loads the URL on which the react app is hosted.

## Build and use app

1. Use command `npm run electron-pack` to build the react app and package the electron app.
2. The build output is stored in dist directory.
3. Install the app using the installer.
4. Enjoy local streaming :)

# Why I made this?

1. For fun.
2. Recents list is convenient, it allows me to track what I have watched.
3. I can easily click the next button on a recent to play the next video in the same folder.
4. Learning how to implement a desktop app using Electron and React while following best practices as much as possible.

## Open to suggestions :)

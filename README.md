# Markdown Text Editor

**A revamped and redesigned version of my previous Markdown Text Editor, featuring a nested file-folder system, the ability to create an account and save your files permanently, and a better user interface for screens of all sizes.**

**Quickly create and organise your Markdown files.**

## Application

The app is hosted on Render.

**:warning: The application connects to a server. You can view the application without the server (click on the second link), but you won't be able to log in or create an account. If you wish to connect to the server, please click on the first link and allow for up to a minute for the server to start up (due to the limits of Render's free tier). Once the server is up and running, you will be redirected to a page confirming this.**

-> [Click here to start the server](https://mte2-backend.onrender.com) <-

Once the server is up and running, you can view the application.

-> [Click here to view the application](https://markdown-text-editor-2-0.onrender.com/) <-

You can still view the application without the server, but you won't be able to log in or create an account.

https://github.com/SA9102/Markdown-Text-Editor-2.0/assets/96877426/e29a7387-454c-4a05-880c-bb3b1c6e0988

## Overview

- The front-end is redone with TypeScript, and since it now uses a database (specifically MongoDB), it connects to an Express server. (made with just vanilla JavaScript).
- Uses the [Mantine](https://mantine.dev/) component library.
- Icons from [Tabler](https://tabler.io/icons).

## Features

- A nested file-folder system for sophisticated organisation
- Save your files on local storage, or ...
- Create an account to save your files in the cloud
- Responsive

## Usage

## Security

Passwords are salted and hashed using the core `crypto` for either storing the password in the database (for registering), or for comparing a password stored in the database based on the given username (for logging in).

## :package: More Features

I may implement these features in future versions:

- Search for given phrases within a file
- Download files as plain text files and as Portable Document Formats
- Sort files and folders

## Updates

See [changelog.md](./changelog.md).

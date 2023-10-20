# Workout App Tracker

This app is made to:

1. To keep track of what you have and still need to do when working out.
2. Log your workouts as you do them.
3. Easly see how you did last time you worked out.
4. Keep your different wokrouts in one place.
5. Share your workout's with other people.

## Technologies Used

-  **React Native**: A JavaScript framework designed for creating mobile applications that are compatible with multiple platforms, enabling developers to build cross-platform mobile apps using a single codebase. (Andriod & iOS)
-  **Expo**: A comprehensive set of development tools and services that simplifies the process of building and deploying mobile applications created with React Native. It offers a wide range of features, including a development environment, libraries, and services for enhanced app development and distribution.
-  **Yarn**: A dependable package manager designed for efficiently managing and installing project dependencies. Yarn is commonly used in web and JavaScript development to ensure the smooth installation and management of required packages and libraries. Alternitive to npm.
-  **Expo SQLite**: A module provided by Expo for local data storage in React Native applications. It is a wrapper around the SQLite database engine, allowing developers to work with a local database in a cross-platform manner using Expo's APIs.

## Setup

### Program to install for this project

-  **yarn** The preferred way to manage Yarn is by-project and through Corepack, a tool shipped by default with Node.js. Modern releases of Yarn aren't meant to be installed globally, or from npm.
   [Yarn Setup Docs](https://yarnpkg.com/getting-started)
-  **Xcode** - For using iOS sumulator, you'll need to run xCode. (Mac required) This is avalable in the Apple Store [xCode in Apple Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12) -**Simulator** - This should be installed with your Xcode -**Android Studio** - You'll need to get this from there website. [Android Studio Download Page](https://developer.android.com/studio)

### Running setup for the first time

-  **Branch and Clone**: Repository: Begin by cloning this repository to your local development environment.

   `git clone <repository_url>`

-  **Install Dependencies**: Navigate to the project's root directory and run the following command to install the necessary dependencies using Yarn.

   `yarn install`

-  **Check setup**: May need to change your package.json scripts to use `npx expo.....` Assuming this no longer done for you. If you get an error that expo depreated, then you'll need to change them.

-  **Start the App**: After the dependencies are successfully installed, you can start the application using Expo. Run the following command to start the development server and open the app on an Expo client.

   `yarn start`

## Before commiting work

-  **Prettier**:
   -  Prettier VS Code extention: you need to open the folder inside the folder with that has the `.prettierrc.json` file.
   -  If not you can run this from the commandline with
      `npx prettier --write <dirrectory of the file>`

## File Structure (OutDated)

project-root/
│
├── src/
│ ├── assets/
│ ├── components/
│ ├── features/
│ │ ├── feature/
│ │ │ ├── components/
│ │ │ └── screens/
│ ├── infrastructure/
│ │ ├── navigation/
│ │ └── theme/
│ └── services/
│ └── api/
└── App.js

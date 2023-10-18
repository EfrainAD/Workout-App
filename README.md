# Workout App Tracker

This app is made to:

1. To keep track of what you have and still need to do when working out.
2. Log your workouts as you do them.
3. Easly see how you did last time you worked out.
4. Keep your different wokrouts in one place.
5. Share your workout's with other people.

## Technologies Used

-  **React Native**: A JavaScript framework for building cross-platform mobile apps.
-  **Expo**: A set of tools and services for building and deploying React Native apps.
-  **Yarn**: A fast and reliable package manager for installing project dependencies.--
-  **Redux**: A state management library used for managing the app's global state.

## Setup

-  **Branch and Clone**: Repository: Begin by cloning this repository to your local development environment.

   `git clone <repository_url>`

-  **Install Dependencies**: Navigate to the project's root directory and run the following command to install the necessary dependencies using Yarn.

   `yarn install`

-  **iOS Simulator**: If you plan to use the app with iOS, make sure you have an iOS Simulator installed and set up on your development environment.
-  **Start the App**: After the dependencies are successfully installed, you can start the application using Expo. Run the following command to start the development server and open the app on an Expo client.

   `yarn start`

# File Structure

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
│ ├── api/
│ └── redux/
└── App.js

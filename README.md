# Furniro

**Furniro** is an online furniture store where users can browse products, manage their profiles, and make purchases. The application is built with **React** for the frontend and uses **Firebase** as the backend to manage authentication, database, and other services.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Firebase Setup](#firebase-setup)
- [Running the App](#running-the-app)
- [File Structure](#file-structure)
- [License](#license)

## Demo

Check out the live demo of **Furniro** at the following link:

[Live Demo](https://furniro-ke.netlify.app/)

## Project Overview

Furniro is a user-friendly furniture store built with React and Firebase. It provides seamless navigation between products, user authentication, and a checkout process for purchasing furniture items.

## Features

- User authentication (Signup, Login, Logout)
- Product browsing (Shop)
- Product details (Individual Product Page)
- Admin functionality to add products
- Checkout system
- Profile management
- Error handling for 404 pages

## Technologies

- **Frontend**: React (with React Router for routing)
- **Backend**: Firebase (Authentication, Firestore Database, Storage)
- **Routing**: React Router
- **State Management**: Context API (ProductsContext)

## Installation

To get started with the Furniro project, follow these steps:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/DOSSA-HASAN/Furniro.git
    cd furniro
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Install React Router:**

    If not already installed:

    ```bash
    npm install react-router-dom
    ```

4. **Install Firebase SDK:**

    If not already installed:

    ```bash
    npm install firebase
    ```

## Firebase Setup

1. **Create a Firebase Project:**
   - Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
   - Add Firebase to your web app, and copy the Firebase configuration object.

2. **Configure Firebase:**
   - In the root of your project, create a `firebaseConfig.jsx` file inside the `src` folder.
   - Paste your Firebase configuration:

    ```javascript
    import { initializeApp } from "firebase/app";
    import { getAuth } from "firebase/auth";
    import { getFirestore } from "firebase/firestore";
    import { getStorage } from "firebase/storage";

    const firebaseConfig = {
      apiKey: "your-api-key",
      authDomain: "your-auth-domain",
      projectId: "your-project-id",
      storageBucket: "your-storage-bucket",
      messagingSenderId: "your-messaging-sender-id",
      appId: "your-app-id",
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
    const storage = getStorage(app);

    export { auth, db, storage };
    ```

## Running the App

1. **Start the Development Server:**

    ```bash
    npm run dev
    ```

    This will start the app on `http://localhost:3000`.

## File Structure

```plaintext
src/
│
├── App.jsx                     # Main application component
├── App.css                     # Global styles
├── firebaseConfig.jsx           # Firebase configuration
├── ProductsContext.jsx          # Context API for managing product state
├── Home/                       # Home page components
├── authenticate/                # Authentication components (Login, Signup)
│   ├── Login.jsx
│   └── Signup.jsx
├── shop/                       # Shop and product pages
│   ├── Shop.jsx
│   ├── SpecificProduct.jsx
│   └── Checkout.jsx
├── Admin/                      # Admin pages
│   └── AddProducts.jsx
├── contact/                    # Contact page
│   └── Contact.jsx
├── profile/                    # User profile page
│   └── Profile.jsx
└── Error404.jsx                # 404 error page

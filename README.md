# Child Immunization Registration App

A React Native application for registering children and managing their immunization records.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technical Specifications](#technical-specifications)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Child Immunization Registration App is a mobile application developed using React Native. It allows users to register children and manage their immunization records. The app provides features such as child registration, immunization selection, sorting of registered children, child profiles, and optional search functionality.

## Features

1. **Child Registration:**
   - Capture essential details like first name, last name, age, gender, and immunizations.

2. **Registration List:**
   - Display a list of registered children.
   - Implement sorting functionality by age or name.

3. **Child Profile:**
   - Build a profile page displaying information captured during registration.
   - Open the profile page when a user selects a child from the registration list.

4. **Optional Features:**
   - Add a search functionality within the registration list.

## Technical Specifications

- **Framework:** React Native
- **State Management:** React Hooks
- **Database:** AsyncStorage (local storage)
- **Navigation:** React Navigation
- **Styling:** Inline styles and custom components

## Getting Started

### Prerequisites

- Node.js: [Download Node.js](https://nodejs.org/)
- npm (Node Package Manager): Installed with Node.js
- React Native CLI: Install using `npm install -g react-native-cli`

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/child-immunization-app.git


Navigate to the project directory:

bash
cd child-immunization-app
Install dependencies:

bash
npm install
Run the app on an Android emulator or device:

bash
npx react-native run-android
or on iOS:

bash
npx react-native run-ios

Usage
Open the app on your emulator or device.
Register a child by providing the required information.
View the list of registered children and explore additional features.
Folder Structure

child-immunization-app/
|-- android/
|-- ios/
|-- src/
|   |-- components/
|   |-- screens/
|   |-- App.js
|-- .gitignore
|-- package.json
|-- README.md
Dependencies
@react-navigation/native
@react-navigation/native-stack
react-native-vector-icons
@react-native-async-storage/async-storage
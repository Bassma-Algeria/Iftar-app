# Iftar app

This is the official repository for [iftar app](link to the app), which is a react native app that helps you find the nearest al-rahma restaurant to break your fasting during ramadan

## Running the project locally


### 1. Setup your environment

First, make sure to set up your environment for react-native app development by following the instructions in the [docs](https://reactnative.dev/docs/environment-setup). (Stop when you get to the part '`Creating a new application`'), after that clone this repo and start your project.

Also, you need to have `docker` and `docker-compose` installed on your machine.
Refer to the [download page](https://docs.docker.com/get-docker/) to get them.

### 1. Install the dependencies

```bash
npm install
```

### 2. start the metro server

```bash
npm start
```

This will allow The app to reload if you make edits.\
You will also see any lint errors in the console.

### 3. start the backend locally

Pull the backend image from docker hub and setup the database locally by running the following command:

```bash
npm run docker:backend
```

You can check the data in the database by going to [http://localhost:8081](http://localhost:8081), and choosing the `iftar` database.


### 4. Run the app

##### Android

```bash
npm run android
```

##### IOS

```bash
npm run ios
```

> The IOS version is not developed yet, so you will get an error when you run the app on IOS. 
> We will be happy to accept your contribution to develop the IOS version.


## Storybook

#### `npm run storybook`

Runs the storybook and see the components.\
Open [http://localhost:7007](http://localhost:7007) to view it in the browser.

#### `npm run prestorybook`

Run this command everytime you create a new story, (it's gonna load the new story file and add it to the stories list).

#### `npm run build-storybook`

Output a static Storybook in the storybook-static directory, which can then be deployed to any static site hosting service.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.
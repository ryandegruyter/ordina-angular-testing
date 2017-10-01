# Jworks Angular Testing Workshop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.3.

## JSONPlaceHolder

We will be using JSONPlaceholder as our REST Api.
Make sure to correctly configure the baseurl in `app.module.ts`

### Production base URL
By providing no arguments to the static forRoot() method it will set *http://jsonplaceholder.typicode.com/*
as the base url.
```
  imports: [
    JsonPlaceholderApiModule.forRoot(),
  ]
```

### Custom base URL
The static forRoot() method takes an optional string parameter where you can configure the base url.
```
  imports: [
    JsonPlaceholderApiModule.forRoot('http://localhost:3000/'),
  ]
```

## Local REST API

You can choose to communicate with the live REST Api or run it locally:

Clone jsonplaceholder
```
$ git clone https://github.com/typicode/jsonplaceholder
```

Install dependencies
```
$ cd jsonplaceholder
$ npm i
```

Run mockserver (by default it will run at http://localhost:3000/)
```
$ npm start
```


## WallabyJS

We configured WallabyJS for you, if you want to know how to configure WallabyJS for your angular cli project, take a look at: https://github.com/wallabyjs/ngCliWebpackSample

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

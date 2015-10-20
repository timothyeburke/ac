# Aircraft Queue Exercise

![](https://circleci.com/gh/timothyeburke/ac.svg?style=shield) [![Code Climate](https://codeclimate.com/github/timothyeburke/ac/badges/gpa.svg)](https://codeclimate.com/github/timothyeburke/ac)

This is a simple programming exercise to model an aircraft priority queue for an airport. The queue follows the following rules:

- Passenger aircraft take priority over cargo
- Large aircraft take priority over small
- Earlier queued aircraft of the same type and size go first

The application is written in Javascript ES6 and is compiled into ES5 to run in the browser using `grunt traceur`.

- - -

The application broken into the following components:

## Angular stuff
- app.js contains app setup and routing
- `AppCtrl` and `HomeCtrl` are Angular controllers for managing the views
- `AircraftQueueService` implements the queue
- `StorageResource` implements a simple localStorage data persistence system

## Views
- There is only one view in `home.html` that gets embedded in `indexl.html`
- Boot up view is part of `index.html`

## Style
- `normalize.scss` is a reasonably common CSS reset
- `style.scss` is the rest of the style - is a bit messy, sorry.
- Styles are compiled using `grunt sass`

## Test
Testing, both unit and e2e have been setup to run on the continuious integration service [Circle CI](https://circleci.com/). [Code Climate](https://codeclimate.com) provides the code quality grading.

### Code Quality
Part of the build test process includes verifying that I've run `jsbeautifier` on my code before committing it. This ensures consistent code formatting. Additionally, `jshint` is run to ensure that my code has been properly linted for common issues.

### Unit
Unit testing is located in `tests/unit`. These tests are run using karma and `npm test`. There are three test specs:
- `aircraftqueue.service.test.js` which tests `AircraftQueueService`
- `app.controller.test.js` which tests `AppCtrl` boot-related functionality
- `home.controller.test.js` which tests `HomeCtrl` and all of the queue/dequeue functionality

### e2e
End to end (e2e) testing is located in `tests/e2e`. These tests are run in the browser using protractor. There are two test specs:
- `boot.e2e.test.js` which tests the boot functionality
- `home.e2e.test.js` which tests the rest of the app functionality

- - -

## Run it
If you would like to run the project locally, clone the repository to your local machine. You'll need node and npm installed.

- Run `npm install` to install the dependencies.
- Run `grunt` to compile app
- Run `http-server` to serve the app
- In Chrome, navigate to `http://localhost:8080` to view the app.

# React Neighborhood Map

The project is part of Udacity FEND Program.
This is a single page app that allows you to search museums in Venice, Italy. In this project I used [Foursquare](https://developer.foursquare.com/) API to get list of the places and Google Maps API to display places on the neghborhood map.

## Install and Run the app

* Clone this repo in your terminal with the command `git clone https://github.com/cristalnaya/react-neighborhood-map.git`
* or just download it to your computer
* open the terminal and run following commmands
* change directory into `cd react-neighborhood-map`
* run `npm install` in your terminal
* run `npm start` and the app will run locally on port: 3000

Note: [Node JS](https://nodejs.org/en/download/) and [NPM (Node Package Manager)](https://www.npmjs.com/get-npm) are required to install and run the application.

## Structure of the App
```bash
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── README.md
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── Foursquare.svg
    ├── index.css
    ├── index.js
    ├── LocationsAPI.js
    ├── Map.js
    ├── mapStyle.js
    ├── registerServiceWorker.js
    └── SearchBar.js

```


## Libraries

* [create-react-app](https://github.com/facebook/create-react-app)
* [google-maps-react](https://www.npmjs.com/package/google-maps-react)
* [escape-string-regexp](https://www.npmjs.com/package/escape-string-regexp)
* [@fortawesome/react-fontawesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome)
* [recompose](https://www.npmjs.com/package/recompose)


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Tools Used

* [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial) -  this lets you customize maps with your own content and imagery for display on web pages and mobile devices.
* [Foursquare API](https://developer.foursquare.com) - allows to get a list of locations within the neghbourhood.
* [Google Fonts](https://fonts.google.com)

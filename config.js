"use strict";
angular.module('config', [])
  .constant('ENV', {
    name: 'development',
    tokenURL: 'http://localhost:62511/token',
    apiURL: 'https://cerdmantra.onrender.com/api/v1',
    biUrl: 'http://localhost:4200/',
    backgroundimage: '../images/backgroundimage.jpg',
    logo: 'images/logo.png'
  });

"use strict";
angular.module('config', [])
  .constant('ENV', {
    name: 'development',
    tokenURL: 'http://localhost:62511/token',
    apiURL: 'http://20.219.22.190/api/v1/',
    biUrl: 'http://localhost:4200/',
    backgroundimage: '../images/backgroundimage.jpg',
    logo: 'images/logo.png'
  });

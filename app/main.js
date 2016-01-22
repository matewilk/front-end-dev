'use strict';

import {mainController} from './controllers/mainController'

module.exports = angular.module(
    'app',
    [
        'duScroll',
        'ngAnimate',
        'ngMaterial',
        'ngRoute',
        require('./core/layout')
    ]
).config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);

    }
).controller('MainCtrl', mainController);

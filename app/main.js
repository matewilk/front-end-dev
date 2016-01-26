'use strict';

import {mainController} from './controllers/MainController'
import {speedDialMenu} from './core/components/speedDialMenu/speedDialMenu_directive'

module.exports = angular.module('app',[
    'duScroll',
    'ngAnimate',
    'ngMaterial',
    'ngRoute'
])
.config(function ($routeProvider, $locationProvider) {
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

})
.controller('MainCtrl', mainController)
.directive('speedDialMenu', speedDialMenu);

'use strict';

import {mainController} from './controllers/MainController'
import {speedDialMenu} from './core/components/speedDialMenu/speedDialMenuDirective'

module.exports = angular.module('app',[
    'duScroll',
    'ngAnimate',
    'ngMaterial',
    'ngRoute',
    'angular-timeline',
    'angular-inview'
])
.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);

})
.controller('MainCtrl', mainController)
.directive('speedDialMenu', speedDialMenu);

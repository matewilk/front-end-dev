'use strict';

import {mainController} from './controllers/MainController'
import {bottomSheetController} from './controllers/BottomSheetController'
import {mobileController} from './controllers/MobileController'
import {resumeDialogController} from './controllers/ResumeDialogController'
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
.controller('BottomSheetController', bottomSheetController)
.controller('MobileController', mobileController)
.controller('ResumeDialogController', resumeDialogController)
.directive('speedDialMenu', speedDialMenu)
//reload the route as the main view is included in ng-include
//http://stackoverflow.com/questions/16674279/how-to-nest-ng-view-inside-ng-include#answer-20305370
.run(['$route', function($route)  {
    $route.reload();
}]);

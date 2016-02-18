'use strict';

import {mainController} from './controllers/MainController';
import {bottomSheetController} from './controllers/BottomSheetController';
import {mobileController} from './controllers/MobileController';
import {resumeDialogController} from './controllers/ResumeDialogController';
import {speedDialMenu} from './core/components/speedDialMenu/speedDialMenuDirective';
import {contactController} from './controllers/ContactController';

module.exports = angular.module('app',[
    'duScroll',
    'ngAnimate',
    'ngMaterial',
    'ngRoute',
    'angular-timeline',
    'angular-inview',
    'ngMessages'
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
.controller('ContactController', contactController)
.directive('speedDialMenu', speedDialMenu);

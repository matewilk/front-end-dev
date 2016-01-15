'use strict';
module.exports = angular.module(
    'app',
    [
        'duScroll',
        'ngAnimate',
        'ngMaterial',
        'ngRoute'
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
).controller('MainCtrl', function($scope, $mdSidenav, $log, $timeout)
    {
        $scope.toggleLeft = buildToggler('left');
        $scope.isOpenLeft = function(){
            return $mdSidenav('left').isOpen();
        };
        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close RIGHT is done");
                });
        };

        function buildToggler(navID) {
            return function() {
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            }
        }

        this.isOpen = false;
        this.availableModes = ['md-fling', 'md-scale'];
        this.selectedMode = 'md-fling';
        this.availableDirections = ['up', 'down', 'left', 'right'];
        this.selectedDirection = 'left';

        this.tipDirection = 'bottom';

        $scope.$watch('controller.isOpen', function() {
            $timeout(function() {
                $scope.controller.tooltipsVisible = $scope.controller.isOpen;
            }, 500);
        });
    }
).controller('AboutCtrl', function()
    {

    }
);
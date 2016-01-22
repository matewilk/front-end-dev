'use strict';
export function mainController($scope, $mdSidenav, $log, $timeout)
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

        $scope.closeMenu = function () {
            $scope.controller.isOpen = false;
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

        $scope.user = {
            title: 'Senior Web Developer',
            location: 'London',
            company: 'BBC'
        }

        $scope.$watch('skills', function(newVal, oldVal){
            //can't refer to the oldVal as it will create infinite loop
            $scope.skills = {
                javascript: 80,
                html: 75,
                css: 75
            }
        }, true);

}

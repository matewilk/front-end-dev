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

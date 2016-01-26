'use strict';
export function SpeedDialMenuController($scope, $timeout) {

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

}

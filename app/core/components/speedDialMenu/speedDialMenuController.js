'use strict';
export function SpeedDialMenuController($scope, $timeout, $mdBottomSheet) {

    // Speed Dial Menu (gt-xs)
    $scope.closeMenu = function () {
        $scope.controller.isOpen = false;
    };
    this.isOpen = false;
    //availableModes 'md-fling', 'md-scale';
    this.selectedMode = 'md-fling';
    // availableDirections 'up', 'down', 'left', 'right';
    this.selectedDirection = 'left';
    this.tipDirection = 'bottom';

    $scope.$watch('controller.isOpen', function() {
        $timeout(function() {
            $scope.controller.tooltipsVisible = $scope.controller.isOpen;
        }, 500);
    });

    // Bottom Sheet Menu (xs)
    $scope.items = [
        { name: 'Hangout', icon: 'hangout' },
        { name: 'Mail', icon: 'mail' },
        { name: 'Message', icon: 'message' },
        { name: 'Copy', icon: 'copy2' },
        { name: 'Facebook', icon: 'facebook' },
        { name: 'Twitter', icon: 'twitter' },
    ];
}

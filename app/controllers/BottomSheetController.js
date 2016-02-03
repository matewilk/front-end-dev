'use strict';
export function bottomSheetController($scope, $mdBottomSheet, $document)
{
    $scope.scrollTo = function(idSuffix, $event){
        $event.preventDefault();
        $event.stopPropagation();
        var handler = function(){
            var offset = 30; //pixels; adjust for floating menu, context etc
            var someElement = angular.element(document.getElementById('section-'+idSuffix));
            $document.scrollToElement(someElement, 70, 500);
        }
        $mdBottomSheet.hide().then(handler);
    }
}

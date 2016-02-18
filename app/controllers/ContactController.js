'use strict';
export function contactController($scope)
{
    $scope.submit = function() {
      // submit code goes here
    };
    $scope.reset = function() {
      $scope.contact = {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    };
    $scope.reset();
}

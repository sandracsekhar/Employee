angular.module('myApp.form')
    .controller('formController', ['$scope', 'formService', function ($scope, formService) {
        $scope.saveEmployee = function () {
            var employee = {
                firstName: $scope.firstName,
                lastName:$scope.lastName,
                salary:$scope.salary
            }
            formService.saveEmployee(employee);
        }
    }]);
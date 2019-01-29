angular.module('myApp.form')
    .service('formService', ['$http', function ($http) {
        //emplyee/save , employee http post
        this.saveEmployee = function (employee) {
            this.$http.post('emplyee/save', employee);
        }
    }]);
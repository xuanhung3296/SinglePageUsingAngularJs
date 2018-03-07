(function (app) {
    var EditController = function ($scope, apartmentService,$route) {

        $scope.isEditable = function () {
            return $scope.edit && $scope.edit.apartment;
        };

        $scope.cancel = function () {
            $scope.edit.apartment = null;
        };

        $scope.save = function () {
            if ($scope.edit.apartment.Id) {
                updateApartment();
            } else {
                createApartment();
                          
            }
        };
        $scope.apartments = [];
        var updateApartment = function () {
            apartmentService.update($scope.edit.apartment)
                    .then(function () {
                        angular.extend($scope.apartment, $scope.edit.apartment);
                        $scope.edit.apartment = null;
                    });
        };

        var createApartment = function () {
            apartmentService.create($scope.edit.apartment)
                .then(function () {
                    $scope.apartments.push($scope.edit.apartment);
                    $scope.edit.apartment = null;
                    $route.reload();
                });
        };
      
    };
    app.controller("EditController", EditController);
}(angular.module("Apartment")));
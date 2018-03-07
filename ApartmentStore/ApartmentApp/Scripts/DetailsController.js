(function (app) {
    var DetailsController = function ($scope, apartmentService, $routeParams) {
        var id = $routeParams.id;
        apartmentService
            .getById(id)
            .then(function (data) {
            $scope.apartment = data.data;
            })
        $scope.edit = function () {
            $scope.edit.apartment = angular.copy($scope.apartment);
        };
    };
    app.controller("DetailsController", DetailsController);
}(angular.module("Apartment")));

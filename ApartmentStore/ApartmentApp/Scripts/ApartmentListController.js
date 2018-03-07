(function (app) {
    var ApartmentListController = function ($scope,$log, apartmentService) {

        apartmentService
          .getAll()
            .then(function (data) {
        $scope.apartments = data.data;
          });
        $scope.delete = function (apartment) {  
            apartmentService
                .delete(apartment.Id)
                .then(function () {  
                    removeApartmentById(apartment.Id);
                });  
        };  
        var removeApartmentById = function (id) {
            for (var i = 0; i < $scope.apartments.length; i++) {
                if ($scope.apartments[i].Id == id) {
                    $scope.apartments.splice(i, 1);
                    break;
                }
            }
        };
        $scope.create = function () {
            $scope.edit = {
                apartment: {
                    Name: "",
                    Address: "",
                    Price: 0,
                    Owner:"",
                }
            };
        };
};
    app.controller("ApartmentListController", ApartmentListController);
}(angular.module("Apartment")));
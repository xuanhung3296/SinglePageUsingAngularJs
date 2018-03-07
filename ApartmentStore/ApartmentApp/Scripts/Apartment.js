(function () {
    var app = angular.module("Apartment", ["ngRoute"]);
    var config = function ($routeProvider) {
        $routeProvider
        .when("/list",
            { templateUrl: "/ApartmentApp/Views/list.html", controller: "ApartmentListController" })
        .when("/details/:id",
            { templateUrl: "/ApartmentApp/Views/details.html", controller: "DetailsController" })
        .otherwise(
            { redirectTo: "/list", controller: "ApartmentListController" });
    };

    app.config(config);
    app.constant("apartmentApiUrl", "/api/Apartments/");
}());
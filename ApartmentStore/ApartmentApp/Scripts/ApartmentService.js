(function(app) {  
    var apartmentService = function($http, apartmentApiUrl) {  
        var getAll = function() {  
            return $http.get(apartmentApiUrl);  
        };  
  
        var getById = function(id) {  
            return $http.get(apartmentApiUrl + id);  
        };  
  
        var update = function(apartment) {  
            return $http.put(apartmentApiUrl + apartment.Id, apartment);  
        };  
  
        var create = function(apartment) {  
            return $http.post(apartmentApiUrl, apartment);  
        };  
  
        var destroy = function(id) {  
            return $http.delete(apartmentApiUrl + id);  
        };  
  
        return {  
            getAll: getAll,  
            getById: getById,  
            update: update,  
            create: create,  
            delete: destroy  
        };  
    };  
    app.factory("apartmentService", apartmentService);  
}(angular.module("Apartment")));  
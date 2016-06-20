(function() {
    'use strict';

    angular
        .module('apiApp')
        .service('starWarsService', starWarsService);

    starWarsService.$inject = ['$http', '$q'];
    function starWarsService($http, $q) {
        this.getPerson = getPerson;

        var baseUrl = "http://swapi.co/api/";

        ////////////////

        function getPerson() {

            var defer = $q.defer();


            $http.get(baseUrl + "people/1")
                .then(function(response) {
                    var starships = response.data.starships;

                    var starshipsReturn = 0;

                    for(var i = 0; i < starships.length; i++){
                        (function(idx){
                        $http.get(starships[idx])
                            .then(function(starshipResponse){
                                starships[idx] = starshipResponse.data;
                                starshipsReturn++;
                                if(starshipsReturn === starships.length){
                                    defer.resolve(response);
                                }
                            });
                            }(i));
                    }
                });

            return defer.promise;
        }
    }
})();

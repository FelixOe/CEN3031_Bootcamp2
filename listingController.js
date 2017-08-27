angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
    function ($scope, Listings) {
        $scope.listings = Listings;
        $scope.detailedInfo = undefined;

        //Model for Search
        $scope.searchTerm = '';

        //Model for new listings
        $scope.addCode = '';
        $scope.addName = '';
        $scope.addLatitude = '';
        $scope.addLongitude = '';
        $scope.addAddress = '';
        $scope.addCity = '';
        $scope.addState = '';
        $scope.addZip = '';
        $scope.addCountry = '';


        $scope.addListing = function () {
            var newlisting = {
                code: $scope.addCode,
                name: $scope.addName,
                coordinates: {
                    latitude: $scope.addLatitude,
                    longitude: $scope.addLongitude
                },
                address: $scope.addAddress + ', ' + $scope.addCity + ', ' + $scope.addState + ' ' + $scope.addZip + ', ' + $scope.addCountry
            };
            $scope.listings.splice(0, 0, newlisting);
            resetModel();
        };
        $scope.deleteListing = function (index) {
            $scope.detailedInfo = undefined;
            $scope.listings.splice(index, 1);
        };
        $scope.showDetails = function (index) {
            $scope.detailedInfo = Listings[index];
        };
        resetModel = function () {
            $scope.addCode = '';
            $scope.addName = '';
            $scope.addLatitude = '';
            $scope.addLongitude = '';
            $scope.addAddress = '';
            $scope.addCity = '';
            $scope.addState = '';
            $scope.addZip = '';
            $scope.addCountry = '';
        }
    }
]);
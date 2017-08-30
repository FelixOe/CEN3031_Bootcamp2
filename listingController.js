angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
    function ($scope, Listings) {
        $scope.listings = Listings;
        $scope.detailedInfo = undefined;
        $scope.msgdisp = false;
        $scope.message = '';

        //Model for Search
        $scope.searchTerm = '';

        //Model for new listings
        $scope.newListing = {};

        $scope.addListing = function () {
            $scope.listings.splice(0, 0, $scope.newListing);
            $scope.resetModel();
            $scope.msgdisp = true;
            $scope.message = 'The building has been added successfully!';
            $scope.addListingForm.$setPristine();
        };
        $scope.deleteListing = function (listing) {
            debugger;
            $scope.detailedInfo = undefined;
            $scope.listings.splice($scope.listings.indexOf(listing), 1);
            $scope.msgdisp = true;
            $scope.message = 'The building has been deleted successfully!';
        };
        $scope.showDetails = function (listing) {
            $scope.detailedInfo = Listings[$scope.listings.indexOf(listing)];
            $scope.msgdisp = false;
        };
        $scope.resetModel = function () {
            $scope.newListing = {};
            $scope.msgdisp = false;
        };
    }
]);
'use strict';

angular.module('rvplusplus')
  .controller('MainCtrl', function ($scope, Restangular, $location) {
    Restangular.all('products').getList().then(function(products){
      $scope.featuredProducts = products;
      angular.forEach($scope.featuredProducts, function(product) {
        product.featured = (Math.random() >= 0.5);
      });
    });
    $scope.change = function(){
    	$location.path('/basket').search({q:$scope.query}).replace();
    };
  });

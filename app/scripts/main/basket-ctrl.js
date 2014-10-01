'use strict';

angular.module('rvplusplus')
  .controller('BasketCtrl', function ($scope, Restangular, $stateParams) {
  	$scope.searchedProduct = null;

    $scope.basket = {products:[]};
    Restangular.all('products').getList().then(function(products){
      $scope.products = products;
    });
      // Instantiate the bloodhound suggestion engine
  var products = new Bloodhound({
    datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.num); },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: '/api/products?conditions={"name":{"$regex":"^%QUERY", "$options":"i"}}',
  });

  // initialize the bloodhound suggestion engine
  products.initialize();

  // Typeahead options object
  $scope.productSearchOptions = {
    highlight: true
  };

  // Single dataset example
  $scope.productsDataset = {
    displayKey: 'name',
    source: products.ttAdapter()
  };

  
  var patt = new RegExp('^[0-9]+$');
  $scope.$watch('searchedProduct', function(){
  	if($scope.searchedProduct && $scope.searchedProduct._id !== null){
  		$scope.basket.products.push({product:$scope.searchedProduct, count:1});
  		$scope.searchedProduct = '';
  	}
	if (patt.test($scope.searchedProduct)) {
		var code = $scope.searchedProduct.toString();
		if(code.length < 2) {return;}
		var checkmark = parseInt(code[code.length-1]);
		var weights = [3, 1];
		var sum = 0;
		var i = code.length - 2;
		var add = (i % 2 === 0) ? 0 : 1;
		for (; i >= 0; i--) {
			sum += (parseInt(code[i]) * weights[ (i + add) % 2]);
		}
		
		var checksum = 10 - sum % 10;
		if(checksum === checkmark){
			Restangular.all('products').getList({conditions: JSON.stringify({'eanCodes': $scope.searchedProduct})}).then(function(products){
				$scope.basket.products.push({product:products[0], count:1});
				$scope.searchedProduct = '';
			});
		}
	}
  });
  $scope.searchedProduct = $stateParams.q ? $stateParams.q : null;
  //console.log($scope.searchedProduct);
  $scope.deleteFromBasket = function (line) {
  	$scope.basket.products = _.without($scope.basket.products, line);
  };
});

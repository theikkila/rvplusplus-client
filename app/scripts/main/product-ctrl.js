'use strict';

angular.module('rvplusplus')
  .controller('ProductCtrl', function ($scope, Restangular, $stateParams) {
    var Products = Restangular.all('products');
    $scope.eanOK = true;
    Products.get($stateParams.id).then(function(product){
    	$scope.product = product;
    });
    $scope.$watch('product.eanCodes', function(){
    	if($scope.product === undefined || $scope.product.eanCodes === undefined){
    		return;
    	}
    	$scope.eanOK = true;
    	$scope.product.eanCodes.forEach(function(o){
            var ean = (o.text !== undefined) ? o.text : o;
    		if(!validateEAN(ean)){
    			//console.log("its not ok");
    			$scope.eanOK = false;
    		}else{
    			//console.log("itsok");
    		}
    	});
    }, true);
    function validateEAN(ean){
    	var code = ean.toString();
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
		return (checksum === checkmark);
    }
    $scope.saveProduct = function(product){
    	//console.log($scope.product.eanCodes);
    	$scope.product.eanCodes = $scope.product.eanCodes.map(function(ean){
    		if(ean.text !== undefined){
    			return ean.text;
    		}
    		return ean;
    	});
    	$scope.product.put();
    };
  });

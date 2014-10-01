'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('rvplusplus'));

  beforeEach(inject(function($rootScope) {
  	scope = $rootScope.$new();
  }));
  describe('MainCtrl', function(){
    it('should have change-function', inject(function($controller) {
      expect(scope.change).toBeUndefined();

      $controller('MainCtrl', {
        $scope: scope
    	});
      expect(angular.isFunction(scope.change)).toBeTruthy();
    }));    
  });
  describe('BasketCtrl', function(){
    it('should have deleteFromBasket-function', inject(function($controller) {
      expect(scope.deleteFromBasket).toBeUndefined();

      $controller('BasketCtrl', {
        $scope: scope
      });
      expect(angular.isFunction(scope.deleteFromBasket)).toBeTruthy();
    }));    
  });
  describe('ProductCtrl', function(){
    it('should have saveProduct-function', inject(function($controller) {
      expect(scope.saveProduct).toBeUndefined();

      $controller('ProductCtrl', {
        $scope: scope,
        $stateParams: {id:1}
      });
      expect(angular.isFunction(scope.saveProduct)).toBeTruthy();
    }));    
  });
});

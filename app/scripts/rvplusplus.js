'use strict';

angular.module('rvplusplus', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'siyfion.sfTypeahead', 'xeditable', 'ngTagsInput'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      });
      $stateProvider
      .state('basket', {
        url: '/basket?q',
        templateUrl: 'partials/basket.html',
        controller: 'BasketCtrl'
      });
      $stateProvider
      .state('products', {
        abstract: true,
        url: '/products',
        template: '<ui-view/>'
      });
      $stateProvider
      .state('products.list', {
        url: '',
        templateUrl: 'partials/products.list.html',
        controller: 'ProductsCtrl'
      });
      $stateProvider
      .state('products.detail', {
        url: '/:id',
        templateUrl: 'partials/products.detail.html',
        controller: 'ProductCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
  .config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('/api');
    RestangularProvider.setRestangularFields({id: '_id'});
})
  .run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
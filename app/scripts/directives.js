'use strict';
angular.module('rvplusplus').directive('initFocus', function() {
    return {
        restrict: 'A', // only activate on element attribute
        link: function(scope, element, attrs) {
            element.focus();
        }
    };
});

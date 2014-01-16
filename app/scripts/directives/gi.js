'use strict';

angular.module('hairyNemesisApp')
  .directive('gi', function() {
    var gi = {
      restrict: 'E',
      replace: true,
      scope: {
        icon: '@'
      },
      templateUrl: 'views/gi.html'
    };
    return gi;
  });
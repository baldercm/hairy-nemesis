'use strict';

angular.module('hairyNemesisApp')
  .directive('gi', function() {
    var gi = {
      restrict: 'E',
      replace: true,
      scope: {
        icon: '@'
      },
      template: '<span class="glyphicon glyphicon-{{icon}}"></span>'
    };
    return gi;
  });
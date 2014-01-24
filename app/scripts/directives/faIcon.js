'use strict';

angular.module('hairyNemesisApp')
  .directive('faIcon', function() {
    var gi = {
      restrict: 'EA',
      scope: {
        faIcon: '@'
      },
      link: function linkFn(scope, iElement) {
        iElement.addClass('fa');
        iElement.addClass('fa-' + scope.faIcon);
      }
    };
    return gi;
  });
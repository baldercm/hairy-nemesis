'use strict';

angular.module('hairyNemesisApp')
  .directive('myGlyphicon', function() {
    var gi = {
      restrict: 'EA',
      scope: {
        myGlyphicon: '@'
      },
      link: function linkFn(scope, iElement) {
        iElement.addClass('glyphicon');
        iElement.addClass('glyphicon-' + scope.myGlyphicon);
      }
    };
    return gi;
  });
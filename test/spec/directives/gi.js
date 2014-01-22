'use strict';

describe('GlyphIcon Directive', function () {

  var scope, $compile;
  var element;

  beforeEach(module('gi'));
  beforeEach(module('views/_gi.html'));

  beforeEach(inject(function ($rootScope, _$compile_) {
    scope = $rootScope;
    $compile = _$compile_;

    element = angular.element('<gi icon="star"');
  }));


});
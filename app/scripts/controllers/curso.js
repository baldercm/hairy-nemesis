'use strict';

angular.module('hairyNemesisApp')
  .controller('CursoCtrl', function ($scope) {
    $scope.cursos = [
      { id: 1, name: 'Curso 11-12', start : new Date(2011, 8, 1)},
      { id: 2, name: 'Curso 12-13', start : new Date(2012, 8, 1)},
      { id: 3, name: 'Curso 13-14', start : new Date(2013, 8, 1)}
    ];

    $scope.newCurso = {};
    $scope.options = {
      formCollapse : true
    };

    $scope.saveCurso = function() {
      console.log($scope.newCurso);
      $scope.cursos.push($scope.newCurso);
      $scope.newCurso = {};
      console.log('TODO saveCurso()');
    };

    $scope.toggleForm = function() {
      $scope.options.formCollapse = !$scope.options.formCollapse;
    };
  });

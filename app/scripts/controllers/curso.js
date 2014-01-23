'use strict';

angular.module('hairyNemesisApp')
  .controller('CursoCtrl', function ($scope) {
    $scope.cursos = [
      { id: 1, name: 'Curso 11-12'},
      { id: 2, name: 'Curso 12-13'},
      { id: 3, name: 'Curso 13-14'}
    ];

    $scope.newCurso = {};
    $scope.options = {
      formCollapse : true
    };

    $scope.saveCurso = function() {
      $scope.cursos.push({
        id : undefined,
        name : $scope.newCurso.name
      });
      $scope.newCurso = {};
      console.log('TODO saveCurso()');
    };

    $scope.toggleForm = function() {
      $scope.options.formCollapse = !$scope.options.formCollapse;
    };
  });

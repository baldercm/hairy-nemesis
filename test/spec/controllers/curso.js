'use strict';

describe('Controller: CursoCtrl', function () {

  // load the controller's module
  beforeEach(module('hairyNemesisApp'));

  var CursoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CursoCtrl = $controller('CursoCtrl', {
      $scope: scope
    });
  }));

  it('should initialize model', function () {
    expect(scope.cursos.length).toBe(3);
    expect(scope.options.formCollapse).toBe(true);
  });

  it('should toggle form', function () {
    expect(scope.options.formCollapse).toBe(true);
    scope.toggleForm();
    expect(scope.options.formCollapse).toBe(false);
    scope.toggleForm();
    expect(scope.options.formCollapse).toBe(true);
  });

  it('should add newCurso on saveCurso', function () {
    var lenghtBefore = scope.cursos.length;

    scope.saveCurso();

    expect(scope.cursos.length).toBe(lenghtBefore + 1);
  });

  it('should reset newCurso on saveCurso', function () {
    scope.newCurso.name = 'New Curso';

    scope.saveCurso();

    expect(scope.newCurso.name).toBe(undefined);
  });
});

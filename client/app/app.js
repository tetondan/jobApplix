(function(){
   var app = angular.module('myApp',['myApp.applicationCont','myApp.signupCont','myApp.loginCont', 'myApp.businessDashBoard', 
                                     'myApp.businessSetup','myApp.imageUploadCont','myapp.appDataServices','myApp.businessDataServices', 'myApp.directives',
                                     'myApp.tabs','myApp.filters','ui.router']); 

    app.config(['$logProvider','$stateProvider', '$urlRouterProvider', function ( $logProvider, $stateProvider, $urlRouterProvider) {
      $logProvider.debugEnabled(true);
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/templates/about.html'
        })
        .state('apply', {
          url: '/apply/:businessName',
          templateUrl: 'app/templates/application/application.html',
          controller: 'ApplicationController',
          resolve: {
            customTemplate: 
              function($stateParams, $http, $state){
                return $http({
                  method: 'GET',
                  url: '/api/businesses/'+ $stateParams.businessName,
                }).then(function(data){
                  return data;
                }).catch(function(){
                  $state.go('404');
                })
              }
          }
        })
        .state('login', {
          url: '/login',
          templateUrl: 'app/templates/login.html',
          controller: 'LoginController'
        })
        .state('dashboard', {
          url: '/dashboard',
          abstract: true,
          templateUrl: 'app/templates/dashboard/header.html',
          controller: 'BusinessDashboard',
          resolve: {
            applications:
              function(BusinessDataServices){
                return BusinessDataServices.getApps();
              }
          }
        })
        .state('signup', {
          url: '/signup',
          templateUrl: 'app/templates/signup.html',
          controller: 'SignupController'
        })
        .state('dashboard.imageupload', {
          url: '/imageupload',
          templateUrl: 'app/templates/dashboard/imageupload.html',
          controller: 'ImageUploadController'
        })
        .state('dashboard.setup', {
          url: '/setup',
          templateUrl: 'app/templates/dashboard/setup.html'
        })
        .state('dashboard.tabs', {
          url: '/tabs',
          templateUrl: 'app/templates/dashboard/tabs.html',
          controller: 'TabsController',
          resolve: {
            customTemplate: 
              function(BusinessDataServices){
                return BusinessDataServices.getCurrentForm();
              }
          }
        })

        .state('404', {
          url: '/404',
          templateUrl: 'app/templates/404.html'
        })
      }])
}())

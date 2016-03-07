/* global angular */

(function(angular) {

    var app = angular.module('flapperNewsApp', ['ngResource', 'ui.router']);
    
    app.config(States);
    
    States.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    function States($stateProvider, $urlRouterProvider) {
        
        $stateProvider
            .state('home', {
                url : '/home',
                templateUrl: '/temp/home.html',
                controller : 'MainCtrl'
            })
            .state('posts', {
                url : '/posts/{id}',
                templateUrl: '/temp/posts.html',
                controller: 'PostsCtrl'
            });
            
            $urlRouterProvider.otherwise('home');
            
    }
    
})(angular);
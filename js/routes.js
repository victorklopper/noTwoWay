angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  
      
        
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html'
    })
        
      
    
      
        
    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html'
    })
        
      
    
      
        
    .state('menu.humorNossoDeCadaDia', {
      url: '/humor',
      views: {
        'side-menu21': {
          templateUrl: 'templates/humorNossoDeCadaDia.html'
        }
      }
    })
        
      
    
      
        
    .state('page18', {
      url: '/humor2',
      templateUrl: 'templates/page18.html'
    })
        
      
    
      
        
    .state('page19', {
      url: '/humor3',
      templateUrl: 'templates/page19.html'
    })
        
      
    
      
        
    .state('menu.notas', {
      url: '/notas',
      views: {
        'side-menu21': {
          templateUrl: 'templates/notas.html'
        }
      }
    })
        
      
    
      
        
    .state('menu.grafico', {
      url: '/grafico',
      views: {
        'side-menu21': {
          templateUrl: 'templates/grafico.html'
        }
      }
    })
        
      
    
      
        
    .state('inicio', {
      url: '/posLogin',
      templateUrl: 'templates/inicio.html'
    })
        
      
    
      
        
    .state('menu', {
      url: '/side-menu21',
      templateUrl: 'templates/menu.html'
    })
        
      
    
      
        
    .state('humorCadastrado', {
      url: '/humorCadastrado',
      templateUrl: 'templates/humorCadastrado.html'
    })
        
      
    
      
        
    .state('notaCadastrada', {
      url: '/notaCadastrada',
      templateUrl: 'templates/notaCadastrada.html'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/login');
  

  

});
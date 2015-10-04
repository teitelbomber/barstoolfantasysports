angular.module( 'barstoolFantasySports', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'contest.leaderboard',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/leaderboard' );

  $stateProvider.state( 'ngBoilerplate', {
    abstract: true,
    url: '/',
    views: {
      "header": {
        templateUrl: 'layout/header/header.tpl.html'
      },
      "footer": {
        templateUrl: 'layout/footer/footer.tpl.html'
      }
    }
  });

  $stateProvider.state( 'contest', {
    abstract: true,
    url: '/',
    views: {
      "header": {
        templateUrl: 'layout/header/header.tpl.html'
      },
      "footer": {
        templateUrl: 'layout/footer/footer.tpl.html'
      }
    }
  });
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Barstool Fantasy Sports' ;
    }
  });
})

;


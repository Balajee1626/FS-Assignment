angular.module('eCommerceApp', ['ngRoute', 'ngCookies'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', { templateUrl: 'views/home.html', controller: 'HomeController' })
      .when('/products', { templateUrl: 'views/products.html', controller: 'ProductsController' })
      .when('/product/:id', { templateUrl: 'views/product-details.html', controller: 'ProductDetailsController' })
      .when('/about', { templateUrl: 'views/about.html', controller: 'AboutController' })
      .when('/contact', { templateUrl: 'views/contact.html', controller: 'ContactController' })
      .when('/login', { templateUrl: 'views/login.html', controller: 'LoginController' })
      .otherwise({ redirectTo: '/' });
  }]);

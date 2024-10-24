angular.module('eCommerceApp')
  .controller('ProductDetailsController', ['$scope', '$routeParams', 'ProductService', function($scope, $routeParams, ProductService) {
    const productId = $routeParams.id;
    $scope.currentRating = 0;
    $scope.newComment = '';
    
    ProductService.getProductById(productId).then(response => {
      $scope.product = response.data;
    });

    $scope.submitRating = function() {
      if ($scope.currentRating > 0) {
        ProductService.addRating(productId, $scope.currentRating).then(() => {
          alert('Rating submitted successfully');
        });
      }
    };

    $scope.submitComment = function() {
      if ($scope.newComment) {
        ProductService.addComment(productId, $scope.newComment).then(() => {
          alert('Comment submitted successfully');
          $scope.newComment = '';
        });
      }
    };
  }]);

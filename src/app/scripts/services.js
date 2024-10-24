angular.module('eCommerceApp')
  .service('ProductService', ['$http', '$cookies', function($http, $cookies) {
    const apiUrl = 'http://localhost:5000/api/products';
    this.getProductById = function(productId) {
      return $http.get(`${apiUrl}/${productId}`);
    };
    this.addRating = function(productId, rating) {
      const token = $cookies.get('token');
      return $http.post(`${apiUrl}/${productId}/rating`, { rating }, {
        headers: { Authorization: `Bearer ${token}` }
      });
    };
    this.addComment = function(productId, comment) {
      const token = $cookies.get('token');
      return $http.post(`${apiUrl}/${productId}/comment`, { text: comment }, {
        headers: { Authorization: `Bearer ${token}` }
      });
    };
  }]);

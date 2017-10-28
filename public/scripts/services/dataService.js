(function () {
    angular.module('app').service('dataService', function ($http) {
        this.getRecipes = function (callback) {
            $http.get('api/recipes')
                .then(callback);
        }
        this.getCatorgories = function (callback) {
            $http.get('api/categories')
                .then(callback);
        }
        this.getFoodItems = function (callback) {
            $http.get('api/fooditems')
                .then(callback);
        }
        this.deleteThisRecipe = function (recipe, callback) {
            $http.delete(`api/recipes/${recipe._id}`)
                .then(callback);
        }
        this.getRecipeByCategory = function (category, callback) {
            $http.get('api/recipes?category=' + category)
                .then(callback);
        }
        this.getRecipe = function (id, callback) {
            $http.get(`api/recipes/${id}`)
                .then(callback);
        }
        this.updateRecipe = function (recipe,callback) {
            $http.put(`api/recipes/${recipe._id}`, recipe)
                .then(callback)
        }
        this.saveRecipe = function (recipe,callback) {
            $http.post('api/recipes', recipe)
                .then(callback)
        }

    });//end of service
})();//end of IIFE